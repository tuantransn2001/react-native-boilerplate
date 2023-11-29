import React from "react";
import { useToast } from "native-base";
import ToastWrapper from "@shared-components/toast-wrapper/ToastWrapper";
import { IToastWrapper } from "./shared/useToastWrapper.interface";

export const useToastWrapper = () => {
  const toast = useToast();

  return {
    showToast: (payload: IToastWrapper) =>
      toast.show({
        render: ({ id }) => {
          return <ToastWrapper id={id} {...payload} />;
        },
      }),
    closeToast: () => console.log("handle close toast"),
  };
};
