import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICountry, IPlayerStatistics, IResponse, ITeam } from '../interfaces';
import ILeague from '../interfaces/ILeague';
import ITeamStatistics from '../interfaces/ITeamStatistics';
import { fetchFootballData } from '../utils';
import {
  fetchLeagueByCountryAndSeason,
  fetchPlayers,
  fetchTeamStatistics,
  fetchTeams,
} from '../utils/fetchFootballData';
import { defaultTeamStatistics } from './defaultValues/defaultTeamStatistics';

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
  teamStatistics: ITeamStatistics;
  setTeamStatistics: (teamStatistics: ITeamStatistics) => void;
  getTeamStatistics: (team: number) => void;
  getPlayers: () => void;
  players: IPlayerStatistics[];
  setPlayers: (players: IPlayerStatistics[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  getLocalTeamStatistics: () => void;
  getLocalPlayers: () => void;
  getLocalLeagues: () => void;
  getLocalTeams: () => void;
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
  teamStatistics: defaultTeamStatistics,
  setTeamStatistics: () => {},
  getTeamStatistics: () => {},
  getPlayers: () => {},
  players: [],
  setPlayers: () => {},
  isLoading: false,
  setIsLoading: () => {},
  getLocalTeamStatistics: () => {},
  getLocalPlayers: () => {},
  getLocalLeagues: () => {},
  getLocalTeams: () => {},
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
  const [teamStatistics, setTeamStatistics] = useState<ITeamStatistics>(
    defaultTeamStatistics
  );
  const [players, setPlayers] = useState<IPlayerStatistics[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    const response: IResponse | undefined = await fetchFootballData(
      apiKey,
      'leagues/seasons'
    );

    const newSeasons = response?.data.response;
    localStorage.setItem('seasons', JSON.stringify(newSeasons));
    setSeasons(newSeasons as unknown as number[]);
    setIsLoading(false);
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
      setIsLoading(true);

      const response: IResponse | undefined =
        await fetchLeagueByCountryAndSeason(apiKey, country, season);

      const newLeagues = response?.data.response;
      localStorage.setItem('leagues', JSON.stringify(newLeagues));
      setLeagues(newLeagues as unknown as ILeague[]);
      setIsLoading(false);
    },
    [apiKey, country]
  );

  const getLocalLeagues = useCallback(() => {
    const localLeagues = JSON.parse(localStorage.getItem('leagues') as string);

    if (localLeagues) {
      setLeagues(localLeagues);
    }
  }, []);

  useEffect(() => {
    getLocalKey();
  }, [getLocalKey]);

  const getTeams = useCallback(
    async (league: number) => {
      setIsLoading(true);

      const response: IResponse | undefined = await fetchTeams(
        apiKey,
        country,
        season,
        league
      );

      const newTeams = response?.data.response;
      localStorage.setItem('teams', JSON.stringify(newTeams));
      setTeams(newTeams as unknown as ITeam[]);

      setIsLoading(false);
    },
    [apiKey, country, season]
  );

  const getLocalTeams = useCallback(() => {
    const localTeams = JSON.parse(localStorage.getItem('teams') as string);

    if (localTeams) {
      setTeams(localTeams);
    }
  }, []);

  const getTeamStatistics = useCallback(
    async (team: number) => {
      setIsLoading(true);

      const response: IResponse | undefined = await fetchTeamStatistics(
        apiKey,
        season,
        league,
        team
      );

      const newTeamStatistics = response?.data.response;
      localStorage.setItem('teamStatistics', JSON.stringify(newTeamStatistics));
      setTeamStatistics(newTeamStatistics as unknown as ITeamStatistics);

      setIsLoading(false);
    },
    [apiKey, season, league]
  );

  const getLocalTeamStatistics = useCallback(() => {
    const localTeamStatistics = JSON.parse(
      localStorage.getItem('teamStatistics') as string
    );

    if (localTeamStatistics) {
      setTeamStatistics(localTeamStatistics);
    }
  }, []);

  const getPlayers = useCallback(async () => {
    setIsLoading(true);

    const response: IResponse | undefined = await fetchPlayers(
      apiKey,
      season,
      league,
      team
    );

    const newPlayers = response?.data.response;
    localStorage.setItem('players', JSON.stringify(newPlayers));
    setPlayers(newPlayers as unknown as IPlayerStatistics[]);

    setIsLoading(false);
  }, [apiKey, season, league, team]);

  const getLocalPlayers = useCallback(() => {
    const localPlayers = JSON.parse(localStorage.getItem('players') as string);

    if (localPlayers) {
      setPlayers(localPlayers);
    }
  }, []);

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
      getPlayers,
      players,
      setPlayers,
      isLoading,
      setIsLoading,
      getLocalTeams,
      getLocalTeamStatistics,
      getLocalPlayers,
      getLocalLeagues,
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
      getPlayers,
      players,
      setPlayers,
      isLoading,
      setIsLoading,
      getLocalTeamStatistics,
      getLocalPlayers,
      getLocalLeagues,
      getLocalTeams,
    ]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
