import React from "react";
import { Input } from "@ui-kitten/components";
import { InputProps } from "../InputWrapper.interface";
import { View } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "@shared-constants";

const TextInputWrapper = ({
  onChange,
  label,
  startIcon,
  ...rest
}: InputProps): React.ReactElement => {
  return (
    <View
      style={{
        position: "relative",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.DISABLE,
      }}
    >
      <FontAwesomeIcon
        style={{
          flex: 1,
          position: "absolute",
          top: 12.5,
          left: 12,
          zIndex: 2,
        }}
        color={COLORS.DISABLE}
        icon={startIcon}
      />
      <Input
        style={{
          width: "100%",
          borderWidth: 0,
          paddingLeft: 22,
          backgroundColor: "transparent",
        }}
        autoCapitalize="none"
        {...rest}
        onChangeText={onChange}
      />

      <FontAwesomeIcon
        style={{
          flex: 1,
          position: "absolute",
          top: 12.5,
          right: 24,
          zIndex: 2,
        }}
        color={COLORS.PRIMARY}
        icon={faCheck}
      />
    </View>
  );
};

export default TextInputWrapper;
