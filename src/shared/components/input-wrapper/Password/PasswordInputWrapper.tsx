/* eslint-disable import/extensions */
import React from "react";
import createStyle from "./PasswordInputWrapper.style";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@ui-kitten/components";
import { Text } from "native-base";
import { InputProps } from "../InputWrapper.interface";
import { COLORS } from "@shared-constants";
const InputWithPassword = (props: InputProps): React.ReactElement => {
  delete props.label;
  const styles = React.useMemo(() => createStyle(), []);
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

  const renderPlaceholder = secureTextEntry
    ? Array.from("*".repeat(props.placeholder?.length ?? 10))
        .map(() => "*")
        .join("")
    : props.placeholder;

  const handleToggleSecureTextEntry = () =>
    setSecureTextEntry(!secureTextEntry);

  const renderCaption = (): React.ReactElement => {
    return (
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>{props.caption}</Text>
      </View>
    );
  };

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
        icon={faLock}
      />

      <Input
        style={{
          width: "100%",
          borderWidth: 0,
          paddingLeft: 22,
          backgroundColor: "transparent",
        }}
        autoCapitalize="none"
        caption={renderCaption}
        accessoryRight={
          <Pressable onPress={handleToggleSecureTextEntry}>
            <FontAwesomeIcon
              style={{
                marginTop: 4,
              }}
              icon={secureTextEntry ? faEyeSlash : faEye}
            />
          </Pressable>
        }
        secureTextEntry={secureTextEntry}
        {...props}
        placeholder={renderPlaceholder}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export default InputWithPassword;
