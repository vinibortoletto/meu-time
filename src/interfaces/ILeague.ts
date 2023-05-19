// export default interface ILeague {
//   id: number;
//   name: string;
//   type: string;
//   logo: string;
// }

import ICountry from './ICountry';
import ISeason from './ISeason';

export default interface ILeague {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: ICountry;
  seasons: ISeason[];
}
