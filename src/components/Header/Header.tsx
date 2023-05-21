import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FootballContext } from '../../contexts/FootballContext';
import * as S from './Header.styles';

export default function Header() {
  const { setApiKey } = useContext(FootballContext);
  const history = useHistory();

  const logout = () => {
    setApiKey('');
    localStorage.setItem('key', '');
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
