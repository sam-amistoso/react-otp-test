import { Method } from 'axios';

export interface IEndpoint {
  method: Method;
  url: string;
  params?: unknown;
  data?: unknown;
}
