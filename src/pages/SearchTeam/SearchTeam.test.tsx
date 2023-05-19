import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { mockCountries, mockSeasons } from '../../tests/mocks/';
import renderWithRouter from '../../tests/utils/renderWithRouter';

jest.mock('../../utils', () => ({
  fetchLeagueByCountryAndSeason: jest.fn(),
}));

describe('SearchTeam | page | integration test', () => {
  it('should render countries select field', () => {
    localStorage.setItem('countries', JSON.stringify(mockCountries));
    renderWithRouter(<App />, 'busca-time');

    const countriesSelect = screen.getByTestId(
      'select-countries'
    ) as HTMLSelectElement;

    expect(countriesSelect).toBeInTheDocument();

    mockCountries.forEach((country) => {
      userEvent.selectOptions(countriesSelect, country.name);
      expect(countriesSelect.value).toBe(country.name);
    });
  });

  it('should render seasons select field', () => {
    localStorage.setItem('countries', JSON.stringify(mockCountries));
    localStorage.setItem('seasons', JSON.stringify(mockSeasons));

    renderWithRouter(<App />, 'busca-time');

    const countriesSelect = screen.getByTestId(
      'select-countries'
    ) as HTMLSelectElement;

    const seasonsSelect = screen.getByTestId(
      'select-seasons'
    ) as HTMLSelectElement;

    expect(seasonsSelect).toBeInTheDocument();

    userEvent.selectOptions(countriesSelect, mockCountries[0].name);

    mockSeasons.forEach((season) => {
      userEvent.selectOptions(seasonsSelect, season.toString());
      expect(seasonsSelect.value).toBe(season.toString());
    });
  });

  it('should render leagues select field', async () => {
    renderWithRouter(<App />, 'busca-time');

    const leaguesSelect = screen.getByTestId(
      'select-leagues'
    ) as HTMLSelectElement;

    expect(leaguesSelect).toBeInTheDocument();
  });
});
