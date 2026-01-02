import { axios_config } from "../config/axios.config";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "sonner";

const request = async <T = unknown>(
  method: AxiosRequestConfig['method'],
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios_config.request<T>({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    let message = "An error occurred. Please try again.";
    if (error.response?.data?.error) {
      message = error.response.data.error;
    } else if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }
    toast.error(message);
    console.error(`[API ERROR]: ${method?.toUpperCase()} ${url}`, error);
    throw error;
  }
};

export const apiClient = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    request<T>("get", url, undefined, config),

  post: <T = unknown>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>("post", url, data, config),

  put: <T = unknown>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>("put", url, data, config),

  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    request<T>("delete", url, undefined, config),

  patch: <T = unknown>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>("patch", url, data, config),

  head: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    request<T>("head", url, undefined, config),

  options: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    request<T>("options", url, undefined, config),
}; 