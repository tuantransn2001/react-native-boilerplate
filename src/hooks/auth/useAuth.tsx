/* eslint-disable camelcase */
import { IUser } from "domain/user";
import * as React from "react";
import { useUserStore } from "stores/client/userStore";
import { handleGetVerifiedToken } from "utils/token/token";

const useAuth = () => {
  const { setUser } = useUserStore();
  const [currentUser, setCurrentUser] = React.useState<IUser | undefined>(
    undefined,
  );

  const handleGetUserInfo = React.useCallback(async () => {
    const access_token_verified = await handleGetVerifiedToken();

    if (!access_token_verified) {
      setUser(null);
      setCurrentUser(undefined);
      return;
    }

    try {
      const getMeResponse = await getMeApi(access_token_verified || "");
      setUser(getMeResponse.data);
      setCurrentUser(getMeResponse.data);
    } catch (err) {
      setUser(null);
      setCurrentUser(undefined);
    }
  }, [setUser]);

  React.useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  return { user: currentUser };
};
export default useAuth;
