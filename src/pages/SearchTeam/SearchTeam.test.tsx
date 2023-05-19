import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { mockCountries, mockSeasons } from '../../tests/mocks/';
import renderWithRouter from '../../tests/utils/renderWithRouter';

describe('SearchTeam | page | integration test', () => {
  it('should render with success', async () => {
    localStorage.setItem('countries', JSON.stringify(mockCountries));
    localStorage.setItem('seasons', JSON.stringify(mockSeasons));

    renderWithRouter(<App />, 'busca-time');

    const countriesSelect = screen.getByTestId(
      'select-countries'
    ) as HTMLSelectElement;

    const seasonsSelect = screen.getByTestId(
      'select-seasons'
    ) as HTMLSelectElement;

    expect(countriesSelect).toBeInTheDocument();
    expect(seasonsSelect).toBeInTheDocument();

    mockCountries.forEach((country) => {
      userEvent.selectOptions(countriesSelect, country.name);
      expect(countriesSelect.value).toBe(country.name);
    });

    mockSeasons.forEach((season) => {
      userEvent.selectOptions(seasonsSelect, season.toString());
      expect(seasonsSelect.value).toBe(season.toString());
    });
  });
});
