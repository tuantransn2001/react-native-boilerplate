import { PropsWithChildren } from "react";

import {
  Placement,
  Status,
  Variant,
} from "@shared-components/toast-wrapper/enum/enum";

export interface IToastWrapper extends PropsWithChildren {
  id?: string;
  variant?: Variant;
  placement?: Placement;
  status?: Status;
  title?: string;
  description?: string;
  isClosable?: boolean;
  [key: string]: any;
}

export type ToastCallback = (payload: IToastWrapper) => void;
