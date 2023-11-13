import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "domain/user";

export interface UserState {
  isLoginSuccess?: boolean;
  id: string | undefined;
  phone: string | null;
  email?: string;
  firstName?: string;
  avatarUrl: string | null;
  updateProfileImage: (image: string) => void;
  updateUsername: (name: string) => void;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      avatarUrl: "",
      email: "",
      phone: "",
      updateProfileImage: (image: string) => set({ avatarUrl: image }),
      updateUsername: (name: string) => set({ firstName: name }),
      setUser: (user) =>
        set({
          id: user.id,
          phone: user.phone,
          email: user.email,
          firstName: user.first_name,
        }),
    }),

    {
      name: "user-store",
      getStorage: () => AsyncStorage,
    },
  ),
);

export const isLoginSuccessSelector = (state: UserState) =>
  state.isLoginSuccess;
export const userIdSelector = (state: UserState) => state.id;
