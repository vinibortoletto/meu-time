import { ICountry, IResponse } from 'interfaces';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loadingGif from '../../assets/loading.webp';
import { Button } from '../../components/Button';
import { FootballContext } from '../../contexts/FootballContext';
import { fetchFootballData } from '../../utils';
import * as S from './Login.styles';

export default function Login() {
  const [apiKey, setApiKey] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { setCountries } = useContext(FootballContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
    setErrorMessage(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(false);
    setIsLoading(true);

    const response: IResponse | undefined = await fetchFootballData(
      apiKey,
      'countries'
    );

    setIsLoading(false);

    if (response?.data.errors.token) {
      setErrorMessage(true);
      return;
    }

    setCountries(response?.data.response as ICountry[]);
    setApiKey('');
    history.push('/busca-time');
  };

  return (
    <S.Container>
      {isLoading ? (
        <S.Loading src={loadingGif} alt="loading gif" />
      ) : (
        <>
          <S.Title>Meu Time</S.Title>

          <S.Form onSubmit={handleSubmit}>
            <S.TextField>
              <label>API key:</label>

              <input
                type="text"
                placeholder="API key"
                value={apiKey}
                onChange={handleInputChange}
              />
            </S.TextField>

            <Button type="submit" disabled={apiKey === ''}>
              Entrar
            </Button>
          </S.Form>

          {errorMessage ? (
            <S.ErrorMessage>Chave inválida</S.ErrorMessage>
          ) : (
            <S.ErrorMessage>&nbsp;</S.ErrorMessage>
          )}
        </>
      )}
    </S.Container>
  );
}
