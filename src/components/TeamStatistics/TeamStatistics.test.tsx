import { render, screen } from '@testing-library/react';
import TeamStatistics from './TeamStatistics';

describe('TeamStatistics | component | unit test', () => {
  it('should render with success', () => {
    render(<TeamStatistics />);
    const playersTitle = screen.getByRole('heading', { name: /jogadores/i });
    const formationTitle = screen.getByRole('heading', {
      name: /formação mais utilizada/i,
    });
    const resultsTitle = screen.getByRole('heading', { name: /resultados/i });
    const goalsTitle = screen.getByRole('heading', {
      name: /gols por tempo de jogo/i,
    });

    expect(playersTitle).toBeInTheDocument();
    expect(formationTitle).toBeInTheDocument();
    expect(resultsTitle).toBeInTheDocument();
    expect(goalsTitle).toBeInTheDocument();
  });
});
