import { IPlayer } from '../../interfaces';

interface Props {
  player: IPlayer;
}

export default function Player(props: Props) {
  const { player } = props;

  return (
    <div key={player.id}>
      <img src={player.photo} alt={player.name} />
      <p>{player.name}</p>
      <p>{player.age}</p>
      <p>{player.nationality}</p>
    </div>
  );
}
