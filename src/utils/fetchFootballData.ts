import axios from 'axios';
import { IResponse } from '../interfaces';

export async function fetchFootballData(
  apiKey: string,
  endpoint: string
): Promise<IResponse | undefined> {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${endpoint}`,
    params: {},
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

export async function fetchLeagueByCountryAndSeason(
  apiKey: string,
  country: string,
  season: number
): Promise<IResponse | undefined> {
  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/leagues`,
    params: {
      country: country,
      season: season,
    },
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
