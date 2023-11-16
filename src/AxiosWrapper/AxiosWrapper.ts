import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IAxiosWrapper } from "./AxiosWrapper.interface";
import Configs from "./AxiosWrapper.configs";

/**
 * AxiosWrapper class
 */
export default class AxiosWrapper implements IAxiosWrapper {
  private client: AxiosInstance;
  protected baseUrl = Configs.baseUrl;
  protected header = Configs.header;

  constructor(config?: AxiosRequestConfig) {
    const defaultConfig = {
      baseURL: this.baseUrl,
      headers: this.header,
    };
    this.client = Axios.create(config ? config : defaultConfig);
  }

  /*
   * Set authorization by Bearer token  :
   */
  public setBearerToken(token: string) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
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
