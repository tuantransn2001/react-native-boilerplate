import React from "react";
import { Input } from "@ui-kitten/components";
import { InputProps } from "../InputWrapper.interface";

const TextInputWrapper = ({
  onChange,
  ...rest
}: InputProps): React.ReactElement => (
  <Input
    style={{
      width: "100%",
      position: "relative",
    }}
    autoCapitalize="none"
    {...rest}
    onChangeText={onChange}
  />
);

export default TextInputWrapper;
