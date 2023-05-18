import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login | page | integration test', () => {
  it('should render with success', () => {
    render(<Login />);

    const title = screen.getByRole('heading', {
      name: /meu time/i,
    });

    const input = screen.getByLabelText(/api key:/i);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
