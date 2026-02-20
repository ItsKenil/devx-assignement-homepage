// ***** start - import from files
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";
// ***** end - import from files

// ***** start - Axios instance
const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
// ***** end - Axios instance

// ***** start - Request Interceptor
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
       // Here we can add token or any other auth token with api so here we can put common things to dowith request
        return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }
);
// ***** end - Request Interceptor

// ***** start - Response Interceptor
apiClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
        // Here we can handle different types of errors
        // Example: if api gives unauthorised user error then we can put logout user logic here as per status code of api
        return Promise.reject(error);
    }
);
// ***** end - Response Interceptor

// ***** start - Common API methods
const api = {
    // get method api call
    get: async <T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.get(url, config);
        return response.data;
    },

    // post method api call
    post: async <T, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.post(
            url,
            data,
            config
        );
        return response.data;
    },

    // put method api call
    put: async <T, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.put(
            url,
            data,
            config
        );
        return response.data;
    },

    // delete method api call
    delete: async <T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.delete(url, config);
        return response.data;
    },
};
// ***** end - Common API methods

export default api;
