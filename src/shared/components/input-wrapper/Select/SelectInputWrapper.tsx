import React from "react";
import { Container, FormControl, HStack, Select } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { InputProps } from "../InputWrapper.interface";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
const SelectInputWrapper = (props: InputProps) => {
  const [value, setValue] = React.useState("");

  const renderOptions = () =>
    props.options?.map(({ label, value }, i) => {
      return <Select.Item label={label} value={value} key={i} />;
    });

  return (
    <Container marginTop={6} minWidth="100%">
      <FormControl isRequired>
        <TextWrapper h5 bold>
          {props.label}
        </TextWrapper>
        <Select
          selectedValue={value}
          minWidth={200}
          minHeight={10}
          accessibilityLabel={props.options ? props.options[0].label : ""}
          placeholder={props.placeholder}
          onValueChange={(itemValue) => {
            setValue(itemValue);
            props.onChange(itemValue);
          }}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <FontAwesomeIcon size={2} icon={faAngleDown} />,
          }}
          mt={1}
          {...props}
        >
          {renderOptions()}
        </Select>
      </FormControl>
      <HStack mt={2} alignItems="baseline">
        <TextWrapper h5>Selected Values: </TextWrapper>
        <TextWrapper h5 bold>
          {value}
        </TextWrapper>
      </HStack>
    </Container>
  );
};
export default SelectInputWrapper;
