import { render, screen } from '@testing-library/react';
import { mockPlayers } from '../../tests/mocks';
import Player from './Player';

describe('Player | component | unit test', () => {
  it('should render with success', () => {
    mockPlayers.forEach(async ({ player }) => {
      render(<Player player={player} />);
      expect(await screen.findByText(player.name)).toBeInTheDocument();
      expect(await screen.findByText(player.age)).toBeInTheDocument();
      expect(await screen.findByText(player.nationality)).toBeInTheDocument();
      expect(await screen.findByAltText(player.name)).toBeInTheDocument();
    });
  });
});
