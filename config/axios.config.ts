import axios from "axios";
import { cookies } from "@/lib/cookies";

const axios_config = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
    ? "https://trovia-api.up.railway.app"
    : "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeoutErrorMessage: "Request timed out, please try again later.",
});

axios_config.interceptors.request.use(
  (config) => {
    const token = cookies.get("auth_token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios_config.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { axios_config };
