import {
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";

/**
 * The interface of AxiosWrapper class
 */
export interface IAxiosWrapper {
    get<TResponse>(
        path: string,
        config?: AxiosRequestConfig,
        errorHandler?: (error: AxiosError) => AxiosError
    ): Promise<TResponse>;

    post<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?: (error: AxiosError) => AxiosError
    ): Promise<TResponse>;

    put<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?: (error: AxiosError) => AxiosError
    ): Promise<TResponse>;

    patch<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?: (error: AxiosError) => AxiosError
    ): Promise<TResponse>;

    setRequestInterceptor(
        interceptorCallback: (
            requestConfig: InternalAxiosRequestConfig
        ) => InternalAxiosRequestConfig,
        errorHandler?: (error: AxiosError) => AxiosError
    );

    setResponseInterceptor(
        interceptorCallback: (response: AxiosResponse) => AxiosResponse,
        errorHandler?: (error: AxiosError) => AxiosError
    );

    terminateConnection: () => void;
}
