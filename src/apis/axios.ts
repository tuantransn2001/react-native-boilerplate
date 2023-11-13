/* eslint-disable camelcase */
import axios from "axios";
import { extractToken } from "utils";
import { API_URL } from "shared/constants/env";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const apiWithInstance = (url?: string, tokens?: string) => {
  const api = axios.create({
    baseURL: url ? url : API_URL,
  });

  api.interceptors.request.use(
    async (config) => {
      config.headers = config.headers ?? {};
      config.headers["Content-Type"] = "application/json";

      if (tokens) {
        const { token_type, access_token } = extractToken(tokens);
        config.headers["Authorization"] = `${token_type} ${access_token}`;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  return api;
};
