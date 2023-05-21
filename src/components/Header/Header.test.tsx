import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header | component | unit test', () => {
  it('should render with success', () => {
    render(<Header />);
    const logo = screen.getByAltText(/bola de futebol/i);
    const title = screen.getByRole('heading', { name: /meu time/i });
    const button = screen.getByRole('button', { name: /sair/i });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
