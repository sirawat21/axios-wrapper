import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IAxiosWrapper } from "./AxiosWrapper.interface";

/**
 * AxiosWrapper class
 */
export default class AxiosWrapper implements IAxiosWrapper {
  private client: AxiosInstance;
  protected defaultConfig = {
    baseURL: "https://reqres.in", // TODO Required change
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "axios/1.6.2",
    },
  };

  constructor(config?: AxiosRequestConfig) {
    this.client = Axios.create(config ? config : this.defaultConfig);
  }

  /*
   * Set authorization by Bearer token  :
   */
  public setBearerToken(token: string) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  /*
   * Set base URL
   */
  public setBaseURL(url: string) {
    this.client.defaults.headers.common.baseURL = url;
  }

  /*
   * Http Get
   */
  public async get<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(path);
      return response.data;
    } catch (error) {
      console.error(error); // TODO Required change
    }
    return {} as TResponse;
  }

  /*
   * Http Post
   */
  public async post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.post<TResponse>(path, object, config)
        : await this.client.post<TResponse>(path, object);
      return response.data;
    } catch (error) {
      console.error(error); // TODO Required change
    }
    return {} as TResponse;
  }

  /*
   * Http Put
   */
  public async put<TRequest, TResponse>(
    path: string,
    object: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(path, object);
      return response.data;
    } catch (error) {
      console.error(error); // TODO Required change
    }
    return {} as TResponse;
  }

  /*
   * Http Patch
   */
  public async patch<TRequest, TResponse>(
    path: string,
    object: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.patch<TResponse>(path, object);
      return response.data;
    } catch (error) {
      console.error(error); // TODO Required change
    }
    return {} as TResponse;
  }
}
