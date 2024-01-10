import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "domain/user/user";

export interface UserState {
  isLogIn?: boolean;
  id: string | undefined;
  phone: string | null;
  email?: string;
  firstName?: string;
  avatarUrl: string | null;
  accessToken?: string;
  updateProfileImage: (image: string) => void;
  updateUsername: (name: string) => void;
  setUser: (user: IUser | null) => void;
  setToken: (user: { accessToken: string }) => void;
  setIsLogin: (isLogIn: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      accessToken: "",
      avatarUrl: "",
      email: "",
      phone: "",
      isLogIn: false,
      updateProfileImage: (image: string) => set({ avatarUrl: image }),
      updateUsername: (name: string) => set({ firstName: name }),
      setUser: (user) => {
        const data = {
          id: user ? user.id : "",
          phone: user ? user.phone : "",
          email: user ? user.email : "",
          firstName: user ? user.first_name : "",
        };

        return set(data);
      },
      setToken: (payload) =>
        set({
          accessToken: payload.accessToken,
        }),

      setIsLogin: (isLogIn: boolean) =>
        set({
          isLogIn,
        }),
    }),

    {
      name: "user-store",
      getStorage: () => AsyncStorage,
      storage: undefined,
      serialize: (data) => JSON.stringify(data),
      deserialize: (data) => JSON.parse(data),
    },
  ),
);
