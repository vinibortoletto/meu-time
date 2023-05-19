export const mockFetchLeaguesResponse = {
  data: {
    get: 'leagues',
    parameters: {
      country: 'Brazil',
      season: '2015',
    },
    errors: [],
    results: 5,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
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
          flag: 'https://media-3.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2015,
            start: '2015-05-09',
            end: '2015-12-06',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: true,
                statistics_fixtures: true,
                statistics_players: true,
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
      {
        league: {
          id: 520,
          name: 'Acreano',
          type: 'League',
          logo: 'https://media-2.api-sports.io/football/leagues/520.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-2.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2015,
            start: '2015-03-01',
            end: '2015-06-27',
            current: false,
            coverage: {
              fixtures: {
                events: false,
                lineups: false,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: true,
              players: false,
              top_scorers: false,
              top_assists: false,
              top_cards: false,
              injuries: false,
              predictions: true,
              odds: false,
            },
          },
        ],
      },
      {
        league: {
          id: 72,
          name: 'Serie B',
          type: 'League',
          logo: 'https://media-1.api-sports.io/football/leagues/72.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-3.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2015,
            start: '2015-05-08',
            end: '2015-11-28',
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
      {
        league: {
          id: 75,
          name: 'Serie C',
          type: 'League',
          logo: 'https://media-3.api-sports.io/football/leagues/75.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-3.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2015,
            start: '2015-05-16',
            end: '2015-11-21',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: true,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: false,
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
      {
        league: {
          id: 76,
          name: 'Serie D',
          type: 'League',
          logo: 'https://media-2.api-sports.io/football/leagues/76.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-2.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2015,
            start: '2015-07-12',
            end: '2015-11-14',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: true,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: false,
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
    ],
  },
};
