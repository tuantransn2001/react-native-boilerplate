import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { COLORS } from "@shared-constants";
import { Box } from "native-base";
import * as React from "react";
import { Pressable, View } from "react-native";
import { CallBackFunction } from "shared/type/common";

interface TitleWrapperProps {
  onClose?: CallBackFunction;
  title?: string;
}
const TitleWrapper = ({ title, onClose }: TitleWrapperProps) => {
  return (
    <Box w="100%" h={6} px={4} justifyContent="center">
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </Pressable>
        <TextWrapper h3 bold color={COLORS.BLACK}>
          {title ?? ""}
        </TextWrapper>
      </View>
    </Box>
  );
};
export default TitleWrapper;
