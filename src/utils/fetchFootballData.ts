import axios from 'axios';
import { IResponse } from '../interfaces';

export default async function fetchFootballData(
  apiKey: string,
  endpoint: string
): Promise<IResponse | undefined> {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };

  try {
    const response: IResponse = await axios(config);
    return response;
  } catch (error) {
    console.log(error);
  }
}
