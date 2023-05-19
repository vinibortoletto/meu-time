import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FootballContext } from '../../contexts/FootballContext';
import { ICountry, IResponse } from '../../interfaces';
import { fetchFootballData } from '../../utils';

export default function SearchTeam() {
  const [country, setCountry] = useState('');
  const { countries, seasons, getLocalCountries, getLocalSeasons } =
    useContext(FootballContext);

  useEffect(() => {
    getLocalCountries();
    getLocalSeasons();
  }, [getLocalCountries, getLocalSeasons]);

  return (
    <div>
      <form>
        <select
          data-testid="select-countries"
          name="countries"
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((country: ICountry) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          data-testid="select-seasons"
          name="seasons"
          disabled={country === ''}
        >
          {seasons.map((season: number) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
