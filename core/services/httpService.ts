import _axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from "axios";

export interface HttpError<T = any> extends AxiosError<T> {}
export interface HttpResponse<T = any> extends AxiosResponse<T> {}
export interface HttpRequestConfig extends AxiosRequestConfig {}

export interface IHttpServiceConfig {
  baseURL: string;
  checkAndUpdateAccessToken: (token: string) => boolean;
  getAccessToken: () => Promise<string>;
  removeAccessToken: () => Promise<void>;
}

let httpConfig: IHttpServiceConfig | null = null;

const axios: AxiosInstance = _axios.create();
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.withCredentials = true;

const configure = (config: IHttpServiceConfig) => {
  httpConfig = config;
  axios.defaults.baseURL = config.baseURL;
};

const checkAndUpdateAccessToken = (token: string) => {
  if (httpConfig) {
    return httpConfig.checkAndUpdateAccessToken(token);
  }
  throw new Error("http service config is not ready yet");
};

const getAccessToken = () => {
  if (httpConfig) {
    return httpConfig.getAccessToken();
  }
  throw new Error("http service config is not ready yet");
};

const removeAccessToken = () => {
  if (httpConfig) {
    return httpConfig.removeAccessToken();
  }
  throw new Error("http service config is not ready yet");
};

export default {
  configure,
  checkAndUpdateAccessToken,
  getAccessToken,
  removeAccessToken,
  baseAxios: axios,
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
  rawAxios: _axios,
};
