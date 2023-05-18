import { IResponse } from '../../interfaces';

export const invalidKeyResponse: IResponse = {
  data: {
    get: 'countries',
    parameters: [],
    errors: {
      token: 'Invalid key',
    },
    results: 0,
    paging: {
      current: 1,
      total: 1,
    },
    response: [],
  },
  status: 200,
};

export const validKeyResponse: IResponse = {
  data: {
    get: 'countries',
    parameters: [],
    errors: { token: '' },
    results: 167,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        name: 'Albania',
        code: 'AL',
        flag: 'https://media-3.api-sports.io/flags/al.svg',
      },
    ],
  },
  status: 200,
};
