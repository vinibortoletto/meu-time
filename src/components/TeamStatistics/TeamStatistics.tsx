import Chart from 'react-apexcharts';
import { vars } from '../../styles/variables';
import { mockPlayers } from '../../tests/mocks';
import { mockTeamStatistics } from '../../tests/mocks/teamStatistics.mock';
import { Player } from '../Player';
import { Title } from '../Title';
import * as S from './TeamStatistics.styles';

export default function TeamStatistics() {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: Object.keys(mockTeamStatistics.goals.for.minute),
    },
    colors: [vars.color.green],
  };

  const series = [
    {
      name: 'gols',
      data: Object.values(mockTeamStatistics.goals.for.minute).map(
        (item) => item.total
      ),
    },
  ];

  return (
    <S.Container>
      <div>
        <Title>Jogadores</Title>

        <S.PlayerWrapper>
          {mockPlayers.map(({ player }) => (
            <Player key={player.id} player={player} />
          ))}
        </S.PlayerWrapper>
      </div>

      <div>
        <Title>Formação mais utilizada</Title>
        <p>
          A formação mais jogada é: {mockTeamStatistics.lineups[0].formation}.
        </p>
        <p>
          A formação foi utilizada {mockTeamStatistics.lineups[0].played} vezes
        </p>
      </div>

      <div>
        <Title>Resultados</Title>
        <S.Table>
          <table>
            <thead>
              <tr>
                <th>Jogos</th>
                <th>Vitórias</th>
                <th>Derrotas</th>
                <th>Empates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mockTeamStatistics.fixtures.played.total}</td>
                <td>{mockTeamStatistics.fixtures.wins.total}</td>
                <td>{mockTeamStatistics.fixtures.loses.total}</td>
                <td>{mockTeamStatistics.fixtures.draws.total}</td>
              </tr>
            </tbody>
          </table>
        </S.Table>
      </div>

      <S.Chart>
        <Title>Gols por tempo de jogo</Title>
        <Chart options={options} series={series} type="bar" />
      </S.Chart>
    </S.Container>
  );
}
