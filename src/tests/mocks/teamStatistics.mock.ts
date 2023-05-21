export const mockTeamStatistics = {
  league: {
    id: 71,
    name: 'Serie A',
    country: 'Brazil',
    logo: 'https://media-1.api-sports.io/football/leagues/71.png',
    flag: 'https://media-2.api-sports.io/flags/br.svg',
    season: 2015,
  },
  team: {
    id: 121,
    name: 'Palmeiras',
    logo: 'https://media-3.api-sports.io/football/teams/121.png',
  },
  form: 'DDLWDLWLWWWWDWWLLLWLWLDLWWWDLLWLLLDDLW',
  fixtures: {
    played: {
      home: 19,
      away: 19,
      total: 38,
    },
    wins: {
      home: 9,
      away: 6,
      total: 15,
    },
    draws: {
      home: 4,
      away: 4,
      total: 8,
    },
    loses: {
      home: 6,
      away: 9,
      total: 15,
    },
  },
  goals: {
    for: {
      total: {
        home: 31,
        away: 29,
        total: 60,
      },
      average: {
        home: '1.6',
        away: '1.5',
        total: '1.6',
      },
      minute: {
        '0-15': {
          total: 9,
          percentage: '15.00%',
        },
        '16-30': {
          total: 6,
          percentage: '10.00%',
        },
        '31-45': {
          total: 8,
          percentage: '13.33%',
        },
        '46-60': {
          total: 11,
          percentage: '18.33%',
        },
        '61-75': {
          total: 13,
          percentage: '21.67%',
        },
        '76-90': {
          total: 8,
          percentage: '13.33%',
        },
        '91-105': {
          total: 5,
          percentage: '8.33%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
    against: {
      total: {
        home: 23,
        away: 28,
        total: 51,
      },
      average: {
        home: '1.2',
        away: '1.5',
        total: '1.3',
      },
      minute: {
        '0-15': {
          total: 4,
          percentage: '7.84%',
        },
        '16-30': {
          total: 16,
          percentage: '31.37%',
        },
        '31-45': {
          total: 4,
          percentage: '7.84%',
        },
        '46-60': {
          total: 9,
          percentage: '17.65%',
        },
        '61-75': {
          total: 5,
          percentage: '9.80%',
        },
        '76-90': {
          total: 12,
          percentage: '23.53%',
        },
        '91-105': {
          total: 1,
          percentage: '1.96%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
  },
  biggest: {
    streak: {
      wins: 4,
      draws: 2,
      loses: 3,
    },
    wins: {
      home: '4-0',
      away: '1-4',
    },
    loses: {
      home: '0-2',
      away: '5-1',
    },
    goals: {
      for: {
        home: 4,
        away: 4,
      },
      against: {
        home: 3,
        away: 5,
      },
    },
  },

  clean_sheet: {
    home: 5,
    away: 3,
    total: 8,
  },

  failed_to_score: {
    home: 6,
    away: 4,
    total: 10,
  },

  penalty: {
    scored: {
      total: 1,
      percentage: '100.00%',
    },
    missed: {
      total: 0,
      percentage: '0%',
    },
    total: 1,
  },

  lineups: [
    {
      formation: '4-2-3-1',
      played: 32,
    },
  ],

  cards: {
    yellow: {
      '0-15': {
        total: 5,
        percentage: '5.38%',
      },
      '16-30': {
        total: 12,
        percentage: '12.90%',
      },
      '31-45': {
        total: 17,
        percentage: '18.28%',
      },
      '46-60': {
        total: 20,
        percentage: '21.51%',
      },
      '61-75': {
        total: 13,
        percentage: '13.98%',
      },
      '76-90': {
        total: 26,
        percentage: '27.96%',
      },
      '91-105': {
        total: null,
        percentage: null,
      },
      '106-120': {
        total: null,
        percentage: null,
      },
    },
    red: {
      '0-15': {
        total: null,
        percentage: null,
      },
      '16-30': {
        total: null,
        percentage: null,
      },
      '31-45': {
        total: null,
        percentage: null,
      },
      '46-60': {
        total: 1,
        percentage: '20.00%',
      },
      '61-75': {
        total: null,
        percentage: null,
      },
      '76-90': {
        total: 4,
        percentage: '80.00%',
      },
      '91-105': {
        total: null,
        percentage: null,
      },
      '106-120': {
        total: null,
        percentage: null,
      },
    },
  },
};
