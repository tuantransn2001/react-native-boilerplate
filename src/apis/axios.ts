/* eslint-disable camelcase */
import axios from "axios";
import env from "shared/constants/env";
import { AsyncStorageHandler } from "utils/asyncStorage/asyncStorage";
import { handleExtractToken } from "utils/token/token";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const Axios = (url?: string) => {
  const api = axios.create({
    baseURL: url ? url : env.API_URL,
  });

  api.interceptors.request.use(
    async (config) => {
      config.headers = config.headers ?? {};

      const tokens = await AsyncStorageHandler.get({
        key: "accessToken",
      });

      if (tokens) {
        const { token: accessToken } = handleExtractToken(tokens);
        config.headers["Cookie"] = `access_token=${accessToken}`;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  return api;
};
