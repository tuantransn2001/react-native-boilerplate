import React, { PropsWithChildren } from "react";
import { Actionsheet } from "native-base";
import { CallBackFunction } from "type/common";
import TitleWrapper from "@shared-components/title-wrapper/TitleWrapper";
import { View } from "react-native";

interface ActionSheetWrapper extends PropsWithChildren {
  title?: string;
  visible?: boolean;
  onClose?: CallBackFunction;
  onAction?: CallBackFunction;
}

const ActionSheetWrapper = ({
  title,
  children,
  onClose,
  visible,
  onAction,
}: ActionSheetWrapper) => {
  return (
    <Actionsheet
      style={{
        flex: 1,
      }}
      isOpen={visible}
      onClose={onClose}
      size="full"
    >
      <Actionsheet.Content>
        <TitleWrapper
          onAction={onAction}
          title={title}
          onClose={onClose as CallBackFunction}
        />
        <View
          style={{
            marginTop: 30,
            width: "95%",
          }}
        >
          {children}
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
export default ActionSheetWrapper;
