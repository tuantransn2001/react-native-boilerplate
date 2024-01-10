import { Dispatch } from "react";

export type SetState<T> = Dispatch<T>;

export type NavigationRouteProps<T> = {
  route?: {
    params: T;
  };
};

export type ObjectLiteral = Record<string, unknown>;

export type CallBackFunction = () => void;

export type Falsy = undefined | null;
