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
    <section>
      <div>
        <Title>Jogadores</Title>

        {mockPlayers.map(({ player }) => (
          <Player key={player.id} player={player} />
        ))}
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
      </div>

      <S.Chart>
        <h2>Gols por tempo de jogo</h2>
        <Chart options={options} series={series} type="bar" />
      </S.Chart>
    </section>
  );
}
