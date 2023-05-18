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
}

const defaultContext: IContext = {
  countries: [],
  setCountries: (countries: ICountry[]) => console.log(countries),
  apiKey: '',
  setApiKey: (apiKey: string) => console.log(apiKey),
  getSeasons: () => console.log(''),
  seasons: [],
  getLocalCountries: () => console.log(''),
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

  const value: IContext = useMemo(
    () => ({
      countries,
      setCountries,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      getLocalCountries,
    }),
    [
      countries,
      setCountries,
      apiKey,
      setApiKey,
      getSeasons,
      seasons,
      getLocalCountries,
    ]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
