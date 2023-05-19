import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FootballContext } from '../../contexts/FootballContext';
import { ICountry } from '../../interfaces';
import ILeague from '../../interfaces/ILeague';

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
    leagues,
  } = useContext(FootballContext);

  const handleSeasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeason(Number(e.target.value));
    getLeagues();
  };

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
          defaultValue={'País'}
        >
          <option>País</option>

          {countries.map((country: ICountry) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
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
        </select>

        <select
          data-testid="select-leagues"
          name="leagues"
          disabled={season === 0}
        >
          {leagues.map(({ league }: ILeague) => (
            <option key={league.id} value={league.name}>
              {league.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
