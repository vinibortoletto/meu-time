import { ICountry, IResponse } from 'interfaces';
import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FootballContext } from '../../contexts/FootballContext';
import { fetchFootballData } from '../../utils';
import * as S from './Login.styles';

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

    if (response?.data.errors.token) {
      setErrorMessage(true);
      return;
    }

    setCountries(response?.data.response as ICountry[]);
    history.push('/busca-time');
  };

  return (
    <S.Container>
      <S.Title>Meu Time</S.Title>

      <S.Form onSubmit={handleSubmit}>
        <S.TextField>
          <label>API key:</label>

          <input
            type="text"
            placeholder="API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </S.TextField>

        <Button type="submit" disabled={apiKey === ''}>
          Entrar
        </Button>
      </S.Form>

      {errorMessage && <S.ErrorMessage>Chave inválida</S.ErrorMessage>}
    </S.Container>
  );
}
