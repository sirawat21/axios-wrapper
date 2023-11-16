import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IAxiosWrapper } from "./AxiosWrapper.interface";

/**
 * AxiosWrapper class
 */
export default class AxiosWrapper implements IAxiosWrapper {
    private client: AxiosInstance;
    protected defaultConfig = {
        baseURL: "localhost", // TODO Required change
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "User-Agent": "axios",
        },
    };

    /**
     * AxiosWrapper class
     */
    constructor(config?: AxiosRequestConfig) {
        this.client = Axios.create({ ...this.defaultConfig, ...config });
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
    public async get<TResponse>(
        path: string,
        config?: AxiosRequestConfig
    ): Promise<TResponse> {
        try {
            const response = await this.client.get<TResponse>(path, config);
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
        object: TRequest,
        config?: AxiosRequestConfig
    ): Promise<TResponse> {
        try {
            const response = await this.client.put<TResponse>(path, object, config);
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
        object: TRequest,
        config?: AxiosRequestConfig
    ): Promise<TResponse> {
        try {
            const response = await this.client.patch<TResponse>(path, object, config);
            return response.data;
        } catch (error) {
            console.error(error); // TODO Required change
        }
        return {} as TResponse;
    }
}
