import ITeamStatistics from '../../interfaces/ITeamStatistics';

export const defaultTeamStatistics: ITeamStatistics = {
  league: { id: 0, name: '', country: '', logo: '', flag: '', season: 0 },
  team: { id: 0, name: '', logo: '' },
  form: '',
  fixtures: {
    played: { home: 0, away: 0, total: 0 },
    wins: { home: 0, away: 0, total: 0 },
    draws: { home: 0, away: 0, total: 0 },
    loses: { home: 0, away: 0, total: 0 },
  },
  goals: {
    for: {
      total: { home: 0, away: 0, total: 0 },
      average: { home: '', away: '', total: '' },
      minute: {
        '0-15': {
          total: 0,
          percentage: '',
        },
        '16-30': {
          total: 0,
          percentage: '',
        },
        '31-45': {
          total: 0,
          percentage: '',
        },
        '46-60': {
          total: 0,
          percentage: '',
        },
        '61-75': {
          total: 0,
          percentage: '',
        },
        '76-90': {
          total: 0,
          percentage: '',
        },
        '91-105': {
          total: 0,
          percentage: '',
        },
        '106-120': {
          total: 0,
          percentage: '',
        },
      },
    },
  },
  against: {
    total: { home: 0, away: 0, total: 0 },
    average: { home: '', away: '', total: '' },
    minute: {
      '0-15': {
        total: 0,
        percentage: '',
      },
      '16-30': {
        total: 0,
        percentage: '',
      },
      '31-45': {
        total: 0,
        percentage: '',
      },
      '46-60': {
        total: 0,
        percentage: '',
      },
      '61-75': {
        total: 0,
        percentage: '',
      },
      '76-90': {
        total: 0,
        percentage: '',
      },
      '91-105': {
        total: 0,
        percentage: '',
      },
      '106-120': {
        total: 0,
        percentage: '',
      },
    },
  },
  biggest: {
    streak: { wins: 0, draws: 0, loses: 0 },
    wins: { home: '', away: '' },
    loses: { home: '', away: '' },
    goals: { for: { home: 0, away: 0 }, against: { home: 0, away: 0 } },
  },
  clean_sheet: { home: 0, away: 0, total: 0 },
  failed_to_score: { home: 0, away: 0, total: 0 },
  penalty: {
    scored: { total: 0, percentage: '' },
    missed: { total: 0, percentage: '' },
    total: 0,
  },
  lineups: [],
  cards: {
    yellow: {
      '0-15': {
        total: 0,
        percentage: '',
      },
      '16-30': {
        total: 0,
        percentage: '',
      },
      '31-45': {
        total: 0,
        percentage: '',
      },
      '46-60': {
        total: 0,
        percentage: '',
      },
      '61-75': {
        total: 0,
        percentage: '',
      },
      '76-90': {
        total: 0,
        percentage: '',
      },
      '91-105': {
        total: 0,
        percentage: '',
      },
      '106-120': {
        total: 0,
        percentage: '',
      },
    },
    red: {
      '0-15': {
        total: 0,
        percentage: '',
      },
      '16-30': {
        total: 0,
        percentage: '',
      },
      '31-45': {
        total: 0,
        percentage: '',
      },
      '46-60': {
        total: 0,
        percentage: '',
      },
      '61-75': {
        total: 0,
        percentage: '',
      },
      '76-90': {
        total: 0,
        percentage: '',
      },
      '91-105': {
        total: 0,
        percentage: '',
      },
      '106-120': {
        total: 0,
        percentage: '',
      },
    },
  },
};
