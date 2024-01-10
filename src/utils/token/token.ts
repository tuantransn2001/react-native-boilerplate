/* eslint-disable camelcase */
import { getMeApi, refreshApi } from "apis/auth/auth";
import { AsyncStorageHandler } from "utils/asyncStorage/asyncStorage";

export const handleExtractToken = (
  tokens?: string | null | false,
): { tokenType?: string; token?: string } => {
  if (!tokens) return {};

  const [tokenType, token] = tokens.split(" ");

  return {
    tokenType,
    token,
  };
};

export const handleCheckTokenExpired = async (
  token?: string,
): Promise<boolean> => {
  if (!token) return true;

  try {
    await getMeApi(token);
    return false;
  } catch (e) {
    return true;
  }
};

export const handleGetVerifiedToken = async (): Promise<string | null> => {
  let access_token_verified = "";
  const tokens = await AsyncStorageHandler.get({ key: "accessToken" });
  const { token: accessToken } = handleExtractToken(tokens);

  if (!accessToken) return null;

  const isTokenExpired = await handleCheckTokenExpired(accessToken);

  if (!isTokenExpired) {
    access_token_verified = accessToken;
    await AsyncStorageHandler.set({
      key: "accessToken",
      value: `Jwt ${accessToken}`,
    });
  } else {
    const tokens = await AsyncStorageHandler.get({ key: "refreshToken" });
    const { token: refreshToken } = handleExtractToken(tokens); // this accessToken is refresh token

    if (!refreshToken) return null;
    try {
      const refreshTokenResponse = await refreshApi({
        refreshToken,
      });

      if (refreshTokenResponse.statusCode === 201) {
        const { accessToken } = refreshTokenResponse.data;
        access_token_verified = accessToken;
        await AsyncStorageHandler.set({
          key: "accessToken",
          value: `Jwt ${accessToken}`,
        });
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }

  return access_token_verified;
};
