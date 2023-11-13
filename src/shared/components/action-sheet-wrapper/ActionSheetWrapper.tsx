import React, { PropsWithChildren } from "react";
import { Actionsheet, Center } from "native-base";
import { CallBackFunction } from "shared/type/common";
import TitleWrapper from "@shared-components/title-wrapper/TitleWrapper";
import { View } from "react-native";

interface ActionSheetWrapper extends PropsWithChildren {
  title?: string;
  visible?: boolean;
  onClose?: CallBackFunction;
}

const ActionSheetWrapper = ({
  title,
  children,
  onClose,
  visible,
}: ActionSheetWrapper) => {
  return (
    <Center>
      <Actionsheet
        isOpen={visible}
        onClose={onClose}
        size="full"
        style={{
          width: "100%",
          zIndex: 999,
        }}
      >
        <Actionsheet.Content>
          <TitleWrapper title={title} onClose={onClose as CallBackFunction} />
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
    </Center>
  );
};
export default ActionSheetWrapper;
