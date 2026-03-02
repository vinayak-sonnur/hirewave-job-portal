import api from "./axiosConfig";

export const signup = (userData) => {
  return api.post("/auth/signup", userData);
};

export const login = (credentials) => {
  return api.post("/auth/login", credentials);
};