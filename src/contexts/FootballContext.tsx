import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ICountry, IResponse } from '../interfaces';
import ILeague from '../interfaces/ILeague';
import { fetchFootballData } from '../utils';
import { fetchLeagueByCountryAndSeason } from '../utils/fetchFootballData';

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
  getLeagues: () => void;
  leagues: ILeague[];
  setLeagues: (leagues: ILeague[]) => void;
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
};

export const FootballContext = createContext<IContext>(defaultContext);

export function FootballProvider({ children }: IProps) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [country, setCountry] = useState('');
  const [seasons, setSeasons] = useState<number[]>([]);
  const [season, setSeason] = useState(0);
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const [apiKey, setApiKey] = useState('');

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

  const getLeagues = useCallback(async () => {
    const response: IResponse | undefined = await fetchLeagueByCountryAndSeason(
      apiKey,
      country,
      season
    );

    const newLeagues = response?.data.response;
    localStorage.setItem('leagues', JSON.stringify(newLeagues));
    setLeagues(newLeagues as unknown as ILeague[]);
  }, [apiKey, country, season]);

  useEffect(() => {
    getLocalKey();
  }, [getLocalKey]);

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
    ]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
