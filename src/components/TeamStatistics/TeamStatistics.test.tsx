import { render, screen } from '@testing-library/react';
import TeamStatistics from './TeamStatistics';

describe('TeamStatistics | component | unit test', () => {
  it('should render with success', () => {
    render(<TeamStatistics />);

    expect(
      screen.getByRole('heading', { name: 'Jogadores' })
    ).toBeInTheDocument();
  });
});
