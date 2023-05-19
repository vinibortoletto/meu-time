export const mockLeagues = [
  {
    league: {
      id: 71,
      name: 'Serie A',
      type: 'League',
      logo: 'https://media-3.api-sports.io/football/leagues/71.png',
    },
    country: {
      name: 'Brazil',
      code: 'BR',
      flag: 'https://media-2.api-sports.io/flags/br.svg',
    },
    seasons: [
      {
        year: 2013,
        start: '2013-05-25',
        end: '2013-12-08',
        current: false,
        coverage: {
          fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: false,
            statistics_players: false,
          },
          standings: true,
          players: true,
          top_scorers: true,
          top_assists: true,
          top_cards: true,
          injuries: false,
          predictions: true,
          odds: false,
        },
      },
    ],
  },
];
