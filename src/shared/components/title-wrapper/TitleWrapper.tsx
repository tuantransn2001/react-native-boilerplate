import { faAngleLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import RNBounceable from "@freakycoder/react-native-bounceable";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { COLORS } from "@shared-constants";
import { Box } from "native-base";
import * as React from "react";
import { View } from "react-native";
import { CallBackFunction } from "type/common";

interface TitleWrapperProps {
  onClose?: CallBackFunction;
  onAction?: CallBackFunction;
  onGoback?: CallBackFunction;
  action?: string;
  title?: string;
}
const TitleWrapper = ({
  title,
  onClose,
  onGoback,
  action = "Done",
  onAction,
}: TitleWrapperProps) => {
  return (
    <Box w="100%" h={6} px={4} justifyContent="center">
      <View
        style={{
          width: "100%",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RNBounceable onPress={onClose || onGoback}>
          <FontAwesomeIcon icon={onClose ? faXmark : faAngleLeft} />
        </RNBounceable>
        <TextWrapper h4 bold color={COLORS.BLACK}>
          {title ?? ""}
        </TextWrapper>
        <RNBounceable onPress={onAction}>
          {action ? (
            <TextWrapper h5>{action}</TextWrapper>
          ) : (
            <FontAwesomeIcon icon={onClose ? faXmark : faAngleLeft} />
          )}
        </RNBounceable>
      </View>
    </Box>
  );
};
export default TitleWrapper;
