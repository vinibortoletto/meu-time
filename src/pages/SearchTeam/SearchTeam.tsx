import {
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
} from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { TeamStatistics } from '../../components/TeamStatistics';
import { FootballContext } from '../../contexts/FootballContext';
import { ICountry, ITeam } from '../../interfaces';
import ILeague from '../../interfaces/ILeague';
import { mockCountries, mockLeagues, mockSeasons } from '../../tests/mocks';
import { mockTeams } from '../../tests/mocks/teams.mock';
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
  } = useContext(FootballContext);

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
    console.log(teamId);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTeamStatistics(team);
  };

  // useEffect(() => {
  //   getLocalCountries();
  //   getLocalSeasons();
  // }, [getLocalCountries, getLocalSeasons, getTeams]);

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

          {mockCountries.map((country: ICountry) => (
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

          {mockSeasons.map((season: number) => (
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

          {mockLeagues.map(({ league }: ILeague) => (
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

          {mockTeams.map(({ team }: ITeam) => (
            <option key={team.name}>{team.name}</option>
          ))}
        </S.Select>

        <Button disabled={team === 0} type="submit">
          Buscar time
        </Button>
      </S.Form>

      <TeamStatistics />
    </div>
  );
}
