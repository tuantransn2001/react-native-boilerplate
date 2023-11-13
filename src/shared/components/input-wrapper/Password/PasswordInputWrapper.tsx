/* eslint-disable import/extensions */
import React from "react";
import createStyle from "./PasswordInputWrapper.style";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@ui-kitten/components";
import { Text } from "native-base";
import { InputProps } from "../InputWrapper.interface";
const InputWithPassword = (props: InputProps): React.ReactElement => {
  const styles = React.useMemo(() => createStyle(), []);
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

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
    <Input
      style={{
        width: "100%",
        height: 50,
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
      onChangeText={props.onChange}
    />
  );
};

export default InputWithPassword;
