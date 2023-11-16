import { AxiosRequestConfig } from "axios";

/**
 * The interface of AxiosWrapper class
 */
export interface IAxiosWrapper {
    get <TResponse>(
        path: string
    ): Promise<TResponse>;

    post <TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig
    ): Promise<TResponse>;

    put <TRequest, TResponse>(
        path: string, 
        object: TRequest
    ): Promise<TResponse>;

    patch <TRequest, TResponse>(
        path: string,
        object: TRequest
    ): Promise<TResponse>;
}
