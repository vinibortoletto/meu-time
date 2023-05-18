import React, { createContext, useMemo, useState } from 'react';
import { ICountry } from '../interfaces';

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  countries: ICountry[];
  setCountries: (countries: ICountry[]) => void;
}

const defaultContext: IContext = {
  countries: [],
  setCountries: (countries: ICountry[]) => console.log(countries),
};

export const FootballContext = createContext<IContext>(defaultContext);

export function FootballProvider({ children }: IProps) {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const value: IContext = useMemo(
    () => ({
      countries,
      setCountries,
    }),
    [countries, setCountries]
  );

  return (
    <FootballContext.Provider value={value}>
      {children}
    </FootballContext.Provider>
  );
}
