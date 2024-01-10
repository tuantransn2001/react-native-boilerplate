import * as React from "react";
import { faArrowLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import RNBounceable from "@freakycoder/react-native-bounceable";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

type Callback = (payload?: any) => any | void;

interface HeaderWrapperProps {
  title: string;
  onGoBack?: Callback;
  onOption?: Callback;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
  onOption,
  title,
  onGoBack,
}) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <RNBounceable onPress={onGoBack}>
          <FontAwesomeIcon size={20} icon={faArrowLeft} />
        </RNBounceable>
        <TextWrapper h3 bold color={colors.text}>
          {title}
        </TextWrapper>
      </View>
      <RNBounceable onPress={onOption}>
        <FontAwesomeIcon icon={faGear} />
      </RNBounceable>
    </View>
  );
};
export default HeaderWrapper;
