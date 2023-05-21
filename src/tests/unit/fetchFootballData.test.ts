import axios from 'axios';
import { fetchFootballData } from '../../utils';
import { invalidKeyResponse } from '../mocks/fetchFootballData.mock';

jest.mock('axios');

describe('fetchFootballData', () => {
  const apiKey = 'mock api key';
  const endpoint = 'mock endpoint';

  it('should fail to fetch football data', async () => {
    const mockAxios = axios as unknown as jest.Mock;
    mockAxios.mockResolvedValue(invalidKeyResponse);

    const response = await fetchFootballData(apiKey, endpoint);

    expect(mockAxios).toHaveBeenCalledWith({
      method: 'get',
      url: `https://v3.football.api-sports.io/${endpoint}`,
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    });

    expect(response).toBe(invalidKeyResponse);
  });

  it('should throw error if request fails', async () => {
    const error = new Error('Internal Server Error');
    const mockAxios = axios as unknown as jest.Mock;
    mockAxios.mockRejectedValue(error);
    await fetchFootballData(apiKey, endpoint);

    expect(mockAxios).rejects.toThrow(error);
  });
});
