import { PropsWithChildren } from "react";

import {
  Placement,
  Status,
  Variant,
} from "@shared-components/toast-wrapper/enum/enum";

export interface IToastWrapper extends PropsWithChildren {
  variant?: Variant;
  placement?: Placement;
  status?: Status;
  title?: string;
  description?: string;
  isClosable?: boolean;
}

export type ToastCallback = (payload: IToastWrapper) => void;
