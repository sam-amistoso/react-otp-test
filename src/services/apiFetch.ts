// noinspection ExceptionCaughtLocallyJS

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import merge from 'deepmerge';
import apiConfig from './apiConfig';
import { IEndpoint } from '../interfaces/IEndpoint';

const genericErrorMessage =
  'We just experienced a technical issue, please wait a few seconds and try again.';

async function apiFetch<T>(api: IEndpoint, idToken: string): Promise<{ status: number; data: T }> {
  const params: any = api.params || {}; // eslint-disable-line
  const { baseURL, headers } = apiConfig;

  const apiConfigMerge: AxiosRequestConfig = merge.all([
    apiConfig,
    api,
    {
      baseURL,
      headers,
      params,
    },
  ]);

  const axiosCreate = axios.create(apiConfigMerge);

  axiosCreate.interceptors.request.use(async function (config) {
    config.headers.Authorization = idToken;
    return config;
  });

  axiosCreate.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let response: AxiosResponse;
  try {
    response = await axiosCreate({
      ...apiConfigMerge,
      validateStatus: (status: number) => {
        return status < 500;
      },
    });

    if (Number(response.status) === 401 || Number(response.status) === 403) {
      let message: string;
      if (response.data && Object.prototype.hasOwnProperty.call(response.data, 'message')) {
        message = response.data.message;
        throw Error(message);
      } else {
        throw Error(genericErrorMessage);
      }
    }
    return {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    console.log('🚀~file:apiFetch.ts:62 ~ catch err: ', err);
    let message: string;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    throw Error(message);
  }
}

export default apiFetch;
