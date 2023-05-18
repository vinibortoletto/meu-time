import { ICountry, IResponse } from 'interfaces';
import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FootballContext } from '../../contexts/FootballContext';
import { fetchFootballData } from '../../utils';

export default function Login() {
  const [apiKey, setApiKey] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();
  const { setCountries } = useContext(FootballContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response: IResponse | undefined = await fetchFootballData(
      apiKey,
      'countries'
    );

    if (response?.data.errors) {
      setErrorMessage(true);
      return;
    }

    setCountries(response?.data.response as ICountry[]);
    history.push('/times');
  };

  return (
    <div>
      <h1>Meu Time</h1>

      <form onSubmit={handleSubmit}>
        <label>
          API key:
          <input
            type="text"
            placeholder="API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </label>

        <button type="submit" disabled={apiKey === ''}>
          Entrar
        </button>
      </form>

      {errorMessage && <p>Chave inválida</p>}
    </div>
  );
}
