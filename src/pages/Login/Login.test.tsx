import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import {
  invalidKeyResponse,
  validKeyResponse,
} from '../../tests/mocks/fetchFootballData.mock';
import { fetchFootballData } from '../../utils';
import Login from './Login';

jest.mock('../../utils', () => ({
  fetchFootballData: jest.fn(),
}));

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

  it('should render error message if login fails', async () => {
    render(<Login />);
    (fetchFootballData as jest.Mock).mockResolvedValueOnce(invalidKeyResponse);

    const apiKey = 'wrong api key';
    userEvent.type(screen.getByLabelText(/api key:/i), apiKey);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(button).toBeEnabled();
    userEvent.click(button);

    expect(fetchFootballData).toHaveBeenCalled();

    const errorMessage = await screen.findByText(/Chave inválida/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('should login with success', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    (fetchFootballData as jest.Mock).mockResolvedValueOnce(validKeyResponse);
    const apiKey = 'api key';
    userEvent.type(screen.getByLabelText(/api key:/i), apiKey);
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    userEvent.click(button);

    expect(await screen.findByText('Times')).toBeInTheDocument();
  });
});
