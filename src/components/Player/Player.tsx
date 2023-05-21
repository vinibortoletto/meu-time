import { IPlayer } from '../../interfaces';
import * as S from './Player.styles';

interface Props {
  player: IPlayer;
}

export default function Player(props: Props) {
  const { player } = props;

  return (
    <S.Container key={player.id}>
      <S.Image src={player.photo} alt={player.name} />

      <S.Info>
        <S.Name>{player.name}</S.Name>
        <p>{player.age} anos</p>
        <p>{player.nationality}</p>
      </S.Info>
    </S.Container>
  );
}
