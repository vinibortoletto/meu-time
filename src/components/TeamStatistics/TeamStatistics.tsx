import { useContext } from 'react';
import Chart from 'react-apexcharts';
import { FootballContext } from '../../contexts/FootballContext';
import { vars } from '../../styles/variables';
import { Player } from '../Player';
import { Title } from '../Title';
import * as S from './TeamStatistics.styles';

export default function TeamStatistics() {
  const { players, teamStatistics } = useContext(FootballContext);
  const errorMessage = <p>Informações indisponíveis para esse time.</p>;

  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: Object.keys(teamStatistics.goals.for.minute),
    },
    colors: [vars.color.green],
  };

  const series = [
    {
      name: 'gols',
      data: Object.values(teamStatistics.goals.for.minute).map(
        (item) => item.total
      ),
    },
  ];

  return (
    <S.Container>
      <div>
        <Title>Jogadores</Title>

        {players.length === 0 ? (
          <p>Informações indisponíveis para esse time.</p>
        ) : (
          <S.PlayerWrapper>
            {players.map(({ player }) => (
              <Player key={player.id} player={player} />
            ))}
          </S.PlayerWrapper>
        )}
      </div>

      <div>
        <Title>Formação mais utilizada</Title>

        {teamStatistics.lineups[0] ? (
          <>
            <p>
              A formação mais jogada é: {teamStatistics.lineups[0].formation}.
            </p>
            <p>
              A formação foi utilizada {teamStatistics.lineups[0].played} vezes
            </p>
          </>
        ) : (
          <p>Informação indisponível para este time.</p>
        )}
      </div>

      <div>
        <Title>Resultados</Title>
        {!teamStatistics.fixtures ? (
          <p>Informações indisponíveis para esse time.</p>
        ) : (
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
                  <td>{teamStatistics.fixtures.played.total}</td>
                  <td>{teamStatistics.fixtures.wins.total}</td>
                  <td>{teamStatistics.fixtures.loses.total}</td>
                  <td>{teamStatistics.fixtures.draws.total}</td>
                </tr>
              </tbody>
            </table>
          </S.Table>
        )}
      </div>

      <div>
        <Title>Gols por tempo de jogo</Title>
        {!teamStatistics.goals.for.minute ? (
          errorMessage
        ) : (
          <Chart options={options} series={series} type="bar" />
        )}
      </div>
    </S.Container>
  );
}
