import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { TeamStatistics } from '../../components/TeamStatistics';
import { FootballContext } from '../../contexts/FootballContext';
import { ICountry, ITeam } from '../../interfaces';
import ILeague from '../../interfaces/ILeague';
import * as S from './SearchTeam.styles';

export default function SearchTeam() {
  const {
    countries,
    country,
    setCountry,
    seasons,
    season,
    setSeason,
    getLocalCountries,
    getLocalSeasons,
    getLeagues,
    setLeague,
    leagues,
    league,
    getTeams,
    teams,
    team,
    setTeam,
    getTeamStatistics,
    getPlayers,
    players,
    getLocalLeagues,
    getLocalTeams,
    getLocalPlayers,
    getLocalTeamStatistics,
    isLoading,
    teamStatistics,
  } = useContext(FootballContext);
  const history = useHistory();
  const [showTeamStatistics, setShowTeamStatistics] = useState(false);

  const handleSeasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const season = Number(e.target.value);
    setSeason(season);
    getLeagues(season);
  };

  const handleLeagueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const leagueName = e.target.value;
    const leagueId = leagues.find(({ league }) => league.name === leagueName)
      ?.league.id;

    if (leagueId) setLeague(leagueId);

    getTeams(Number(leagueId));
  };

  const handleTeamChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const teamName = e.target.value;
    const teamId = teams.find(({ team }) => team.name === teamName)?.team.id;

    if (teamId) setTeam(teamId);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTeamStatistics(team);
    getPlayers();
    setShowTeamStatistics(true);

    setCountry('');
    setSeason(0);
    setLeague(0);
    setTeam(0);
  };

  const getLocalData = useCallback(() => {
    getLocalCountries();
    getLocalSeasons();
    getLocalLeagues();
    getLocalTeams();
    getLocalPlayers();
    getLocalTeamStatistics();
  }, [
    getLocalCountries,
    getLocalSeasons,
    getLocalLeagues,
    getLocalTeams,
    getLocalPlayers,
    getLocalTeamStatistics,
  ]);

  const redirectUserIfNotLogged = useCallback(() => {
    const localApiKey = localStorage.getItem('key');
    if (!localApiKey) history.push('/');
  }, [history]);

  useEffect(() => {
    getLocalData();
    redirectUserIfNotLogged();
  }, [getLocalData, redirectUserIfNotLogged]);

  return (
    <div>
      <Header />

      <S.Form onSubmit={handleSubmit}>
        <S.Select
          data-testid="select-countries"
          name="countries"
          onChange={(e) => setCountry(e.target.value)}
          defaultValue={'País'}
        >
          <option>País</option>

          {countries.map((country: ICountry) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </S.Select>

        <S.Select
          data-testid="select-seasons"
          name="seasons"
          disabled={country === ''}
          onChange={handleSeasonChange}
          defaultValue={'Temporada'}
        >
          <option>Temporada</option>

          {seasons.map((season: number) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </S.Select>

        <S.Select
          data-testid="select-leagues"
          name="leagues"
          disabled={season === 0}
          onChange={handleLeagueChange}
          defaultValue={'Liga'}
        >
          <option>Liga</option>

          {leagues.map(({ league }: ILeague) => (
            <option key={league.id} value={league.name}>
              {league.name}
            </option>
          ))}
        </S.Select>

        <S.Select
          data-testid="select-teams"
          name="teams"
          disabled={league === 0}
          onChange={handleTeamChange}
          defaultValue={'Time'}
        >
          <option>Time</option>

          {teams.map(({ team }: ITeam) => (
            <option key={team.name}>{team.name}</option>
          ))}
        </S.Select>

        <Button disabled={team === 0} type="submit">
          Buscar time
        </Button>
      </S.Form>

      {isLoading && <Loading />}

      {showTeamStatistics && !isLoading && <TeamStatistics />}
    </div>
  );
}
