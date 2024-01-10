import { Axios } from "apis/axios";
import { apiConstants } from "@api";
import { LoginPayload, RefreshPayload, RegisterPayload } from "domain/user";

export const loginApi = async (payload: LoginPayload) => {
  const response = await Axios(undefined).post(
    apiConstants.API_PATH.auth.login,
    payload,
  );

  return response.data.data;
};
export const registerApi = async (payload: RegisterPayload) => {
  const response = await Axios(undefined).post(
    apiConstants.API_PATH.auth.register,
    payload,
  );

  return response.data.data;
};
export const refreshApi = async (payload: RefreshPayload) => {
  const response = await Axios(undefined).post(
    apiConstants.API_PATH.auth.refresh,
    payload,
  );

  return response.data.data;
};
