import { getMeApi } from "apis/auth/auth";
import { TokenType } from "constants/app/app";
import { IUser } from "domain/user/user";
import * as React from "react";
import { useUserStore } from "stores/client/userStore";
import { AsyncStorageHandler } from "utils/asyncStorage/asyncStorage";
import { handleExtractToken } from "utils/token/token";

const useAuth = () => {
  const [currentUser, setCurrentUser] = React.useState<IUser | undefined>(
    undefined,
  );
  const { setUser } = useUserStore();

  const handleGetUserInfo = React.useCallback(async () => {
    const tokens = await AsyncStorageHandler.get({
      key: "accessToken",
    });

    const { tokenType, accessToken } = handleExtractToken(tokens);

    switch (tokenType) {
      case TokenType.Firebase: {
        // ? Has been set in service
        break;
      }
      case TokenType.Jwt: {
        try {
          const getMeResponse = await getMeApi(accessToken || "");
          setUser(getMeResponse.data);
          setCurrentUser(getMeResponse.data);
        } catch (err) {
          setUser(null);
          setCurrentUser(undefined);
        }
        break;
      }
      default: {
        return;
      }
    }
  }, [setUser]);

  React.useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  return { user: currentUser };
};
export default useAuth;
