import Axios, {
    AxiosInstance,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";
import { IAxiosWrapper } from "./AxiosWrapper.interface";

/**
 * AxiosWrapper class
 */
export default class AxiosWrapper implements IAxiosWrapper {
    /*
     * Properties
     */
    private axios: AxiosInstance;
    protected defaultConfig = {
        baseURL: "localhost", // TODO Required change
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "User-Agent": "axios",
        },
    };

    /*
     * Constructor
     */
    constructor(config?: AxiosRequestConfig) {
        this.axios = Axios.create({ ...this.defaultConfig, ...config });
    }

    /*
     * Terminate connection
     */
    terminateConnection() {
        this.axios = null;
    }

    /*
     * Set Request interceptor
     */
    public setRequestInterceptor(interceptorCallback, errorHandler?) {
        const interceptor = (requestConfig: InternalAxiosRequestConfig) => {
            interceptorCallback(requestConfig);
            return requestConfig;
        };
        const error = (error: AxiosError) => {
            if (errorHandler) errorHandler(error);
            return error;
        };
        this.axios.interceptors.request.use(interceptor, error);
    }

    /*
     * Set Response interceptor
     */
    public setResponseInterceptor(interceptorCallback, errorHandler?) {
        const interceptor = (response: AxiosResponse) => {
            interceptorCallback(response);
            return response;
        };
        const error = (error: AxiosError) => {
            if (errorHandler) errorHandler(error);
            return error;
        };
        this.axios.interceptors.response.use(interceptor, error);
    }

    /*
     * Set Authorization by Bearer token
     */
    public setBearerToken(token: string) {
        this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    /*
     * Http Get
     */
    public async get<TResponse>(
        path: string,
        config?: AxiosRequestConfig,
        errorHandler?
    ): Promise<TResponse> {
        try {
            const response = await this.axios.get<TResponse>(path, config);
            return response.data;
        } catch (error) {
            if (errorHandler) errorHandler(error);
        }
        return {} as TResponse;
    }

    /*
     * Http Post
     */
    public async post<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?
    ): Promise<TResponse> {
        try {
            const response = await this.axios.post<TResponse>(
                path,
                object,
                config
            );
            return response.data;
        } catch (error) {
            if (errorHandler) errorHandler(error);
        }
        return {} as TResponse;
    }

    /*
     * Http Put
     */
    public async put<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?
    ): Promise<TResponse> {
        try {
            const response = await this.axios.put<TResponse>(
                path,
                object,
                config
            );
            return response.data;
        } catch (error) {
            if (errorHandler) errorHandler(error);
        }
        return {} as TResponse;
    }

    /*
     * Http Patch
     */
    public async patch<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: AxiosRequestConfig,
        errorHandler?
    ): Promise<TResponse> {
        try {
            const response = await this.axios.patch<TResponse>(
                path,
                object,
                config
            );
            return response.data;
        } catch (error) {
            if (errorHandler) errorHandler(error);
        }
        return {} as TResponse;
    }
}
