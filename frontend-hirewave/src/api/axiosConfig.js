import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8082" // remove /api
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Skip Authorization for signup/login
    if (token && !config.url.endsWith("/auth/signup") && !config.url.endsWith("/auth/login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;