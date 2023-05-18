interface IData {
  get: string;
  parameters: unknown[];
  errors: {
    token: string;
  };
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: unknown[];
}

export default interface IResponse {
  data: IData;
  status: number;
}
