import React, { createContext, useCallback, useMemo, useState } from 'react';
import { ICountry, IResponse } from '../interfaces';
import { fetchFootballData } from '../utils';

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  countries: ICountry[];
  setCountries: (countries: ICountry[]) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  getSeasons: () => void;
  seasons: number[];
  getLocalCountries: () => void;
  getLocalSeasons: () => void;
}

const defaultContext: IContext = {
  countries: [],
  setCountries: () => {},
  apiKey: '',
  setApiKey: () => {},
  getSeasons: () => {},
  seasons: [],
  getLocalCountries: () => {},
  getLocalSeasons: () => {},
};

export const FootballContext = createContext<IContext>(defaultContext);

export function FootballProvider({ children }: IProps) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [seasons, setSeasons] = useState<number[]>([]);
  const [apiKey, setApiKey] = useState('');

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

  const value: IContext = useMemo(
    () => ({
      countries,
      setCountries,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      getLocalCountries,
      getLocalSeasons,
    }),
    [
      countries,
      setCountries,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      getLocalCountries,
      getLocalSeasons,
    ]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
