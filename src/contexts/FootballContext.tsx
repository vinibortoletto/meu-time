import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICountry, IResponse, ITeam } from '../interfaces';
import ILeague from '../interfaces/ILeague';
import ITeamStatistics from '../interfaces/ITeamStatistics';
import { fetchFootballData } from '../utils';
import {
  fetchLeagueByCountryAndSeason,
  fetchTeamStatistics,
  fetchTeams,
} from '../utils/fetchFootballData';

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  countries: ICountry[];
  country: string;
  setCountry: (country: string) => void;
  setCountries: (countries: ICountry[]) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  getSeasons: () => void;
  seasons: number[];
  season: number;
  setSeason: (season: number) => void;
  getLocalCountries: () => void;
  getLocalSeasons: () => void;
  getLeagues: (season: number) => void;
  leagues: ILeague[];
  setLeagues: (leagues: ILeague[]) => void;
  league: number;
  setLeague: (league: number) => void;
  getTeams: (league: number) => void;
  teams: ITeam[];
  setTeams: (teams: ITeam[]) => void;
  team: number;
  setTeam: (team: number) => void;
  teamStatistics: ITeamStatistics | undefined;
  setTeamStatistics: (teamStatistics: ITeamStatistics) => void;
  getTeamStatistics: (team: number) => void;
}

const defaultContext: IContext = {
  countries: [],
  setCountries: () => {},
  country: '',
  setCountry: () => {},
  apiKey: '',
  setApiKey: () => {},
  getSeasons: () => {},
  seasons: [],
  season: 0,
  setSeason: () => {},
  getLocalCountries: () => {},
  getLocalSeasons: () => {},
  getLeagues: () => {},
  leagues: [],
  setLeagues: () => {},
  league: 0,
  setLeague: () => {},
  getTeams: () => {},
  teams: [],
  setTeams: () => {},
  team: 0,
  setTeam: () => {},
  teamStatistics: undefined,
  setTeamStatistics: () => {},
  getTeamStatistics: () => {},
};

export const FootballContext = createContext<IContext>(defaultContext);

export function FootballProvider({ children }: IProps) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [country, setCountry] = useState('');
  const [seasons, setSeasons] = useState<number[]>([]);
  const [season, setSeason] = useState(0);
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const [league, setLeague] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [team, setTeam] = useState(0);
  const [teamStatistics, setTeamStatistics] = useState<ITeamStatistics>();

  const getLocalKey = useCallback(() => {
    let localKey = localStorage.getItem('key');

    if (localKey) {
      localKey = JSON.parse(localKey);
      setApiKey(localKey as unknown as string);
    }
  }, []);

  const getLocalCountries = useCallback(() => {
    let localCountries = localStorage.getItem('countries');

    if (localCountries) {
      localCountries = JSON.parse(localCountries);
      setCountries(localCountries as unknown as ICountry[]);
    }
  }, []);

  const getSeasons = useCallback(async () => {
    const response: IResponse | undefined = await fetchFootballData(
      apiKey,
      'leagues/seasons'
    );

    const newSeasons = response?.data.response;
    localStorage.setItem('seasons', JSON.stringify(newSeasons));
    setSeasons(newSeasons as unknown as number[]);
  }, [apiKey]);

  const getLocalSeasons = useCallback(() => {
    let localSeasons = localStorage.getItem('seasons');

    if (localSeasons) {
      localSeasons = JSON.parse(localSeasons);
      setSeasons(localSeasons as unknown as number[]);
    }
  }, []);

  const getLeagues = useCallback(
    async (season: number) => {
      const response: IResponse | undefined =
        await fetchLeagueByCountryAndSeason(apiKey, country, season);

      const newLeagues = response?.data.response;
      setLeagues(newLeagues as unknown as ILeague[]);
    },
    [apiKey, country]
  );

  // useEffect(() => {
  //   getLocalKey();
  // }, [getLocalKey]);

  const getTeams = useCallback(
    async (league: number) => {
      const response: IResponse | undefined = await fetchTeams(
        apiKey,
        country,
        season,
        league
      );

      const newTeams = response?.data.response;
      setTeams(newTeams as unknown as ITeam[]);
    },
    [apiKey, country, season]
  );

  const getTeamStatistics = useCallback(
    async (team: number) => {
      const response: IResponse | undefined = await fetchTeamStatistics(
        apiKey,
        season,
        league,
        team
      );

      const newTeamStatistics = response?.data.response;
      setTeamStatistics(newTeamStatistics as unknown as ITeamStatistics);
    },
    [apiKey, season, league]
  );

  const value: IContext = useMemo(
    () => ({
      countries,
      setCountries,
      country,
      setCountry,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      season,
      setSeason,
      getLocalCountries,
      getLocalSeasons,
      getLeagues,
      leagues,
      setLeagues,
      league,
      setLeague,
      getTeams,
      teams,
      setTeams,
      team,
      setTeam,
      teamStatistics,
      setTeamStatistics,
      getTeamStatistics,
    }),
    [
      countries,
      setCountries,
      country,
      setCountry,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      season,
      setSeason,
      getLocalCountries,
      getLocalSeasons,
      getLeagues,
      leagues,
      setLeagues,
      league,
      setLeague,
      getTeams,
      teams,
      setTeams,
      team,
      setTeam,
      teamStatistics,
      setTeamStatistics,
      getTeamStatistics,
    ]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
