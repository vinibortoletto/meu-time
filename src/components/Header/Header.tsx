import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FootballContext } from '../../contexts/FootballContext';
import * as S from './Header.styles';

export default function Header() {
  const { setApiKey, setIsLogged } = useContext(FootballContext);
  const history = useHistory();

  const logout = () => {
    setApiKey('');
    setIsLogged(false);
    localStorage.clear();
    history.push('/');
  };

  return (
    <S.Header>
      <S.Logo src={logo} alt="bola de futebol" />

      <S.Title>Meu Time</S.Title>

      <S.Button type="button" onClick={logout}>
        Sair
      </S.Button>
    </S.Header>
  );
}
