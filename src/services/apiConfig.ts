import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://portal.palmettoeoc.com/prod/public/api/cognito/otp',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
};

export default config;
