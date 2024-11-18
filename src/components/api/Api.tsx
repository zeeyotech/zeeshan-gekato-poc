import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Base configuration for Axios
const api = axios.create({
  baseURL: "https://your-api-base-url.com", // Set your base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Common API function
interface ApiRequestOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, any>;
}

export const apiRequest = async <T = any,>({
  url,
  method,
  params,
  body,
  headers,
}: ApiRequestOptions): Promise<AxiosResponse<T>> => {
  try {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      data: body,
      headers,
    };

    const response = await api.request<T>(config);
    return response;
  } catch (error: any) {
    console.error("API Request Error:", error);
    throw error.response || error.message;
  }
};
