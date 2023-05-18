export default interface IResponse {
  data: {
    get: string;
    parameters: unknown[];
    errors: unknown[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: unknown[];
  };
}
