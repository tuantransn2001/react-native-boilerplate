/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  Placement,
  Status,
  Variant,
} from "@shared-components/toast-wrapper/enum/enum";
import { SCREENS } from "@shared-constants";
import { WEB_CLIENT_ID } from "constants/firebase/firebase";
import { IUser } from "domain/user/user";
import { IToastWrapper } from "hooks/toast/shared/useToastWrapper.interface";
import { handleNavigate } from "utils";
import { AsyncStorageHandler } from "utils/asyncStorage/asyncStorage";

type HandleAuthenticate = {
  showToast: (payload: IToastWrapper) => void;
  setUser: (payload: IUser | null) => void;
  setIsLogin: (isLogIn: boolean) => void;
};

export const handleConfigurationFirebaseGoogleAuth = () =>
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

export const handleLoginWithGoogleFirebase = async (
  payload: HandleAuthenticate,
) => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken, user } = await GoogleSignin.signIn();
    const data = {
      id: user.id,
      first_name: user.givenName as string,
      email: user.email,
      phone: "",
      avatar: user.photo as string,
    } as IUser;
    payload.setUser(data);
    // ? Store token,user information
    payload.setIsLogin(true);
    await AsyncStorageHandler.set({
      key: "accessToken",
      value: `Firebase ${idToken}` as string,
    });
    // ? Alert
    const successLoginToast: IToastWrapper = {
      variant: Variant.solid,
      placement: Placement.top,
      status: Status.success,
      title: "Login success!",
      description: "Moving to home page",
      isClosable: true,
    };
    payload.showToast(successLoginToast);
    // ? Navigate
    setTimeout(() => handleNavigate(SCREENS.CONTACT), 3000);
  } catch (err: any) {
    const failLoginToast: IToastWrapper = {
      variant: Variant.solid,
      placement: Placement.top,
      status: Status.warning,
      title: "Login fail!",
      isClosable: true,
    };
    payload.setIsLogin(false);
    if (err.code === statusCodes.SIGN_IN_CANCELLED) {
      failLoginToast.description = "Has been cancelled!";
    } else if (err.code === statusCodes.IN_PROGRESS) {
      failLoginToast.description = "In process!";
    } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      failLoginToast.description = "Play services not available or outdated!";
    } else {
      failLoginToast.description = "Something went wrong!";
    }
    payload.showToast(failLoginToast);
  }
};

export const handleLogoutWithGoogleFirebase = async (
  payload: HandleAuthenticate,
) => {
  try {
    await GoogleSignin.signOut();
    const successLoginToast: IToastWrapper = {
      variant: Variant.solid,
      placement: Placement.top,
      status: Status.success,
      title: "Logout success!",
      description: "Moving to home page",
      isClosable: true,
    };
    payload.setIsLogin(true);
    payload.showToast(successLoginToast);
    payload.setUser(null);
  } catch (error) {
    payload.setIsLogin(false);
    const failLoginToast: IToastWrapper = {
      variant: Variant.solid,
      placement: Placement.top,
      status: Status.warning,
      title: "Logout fail!",
      description: "Retry!!",
      isClosable: true,
    };
    payload.showToast(failLoginToast);
  }
};
