/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from "react";
import { Text } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import { IFormData } from "./shared/FormWrapper.interface";
import TextInputWrapper from "@shared-components/input-wrapper/Text/TextInputWrapper";
import { InputType } from "./shared/FormWrapper.enum";
import { InputProps } from "@shared-components/input-wrapper/InputWrapper.interface";
import InputWithPassword from "@shared-components/input-wrapper/Password/PasswordInputWrapper";
import SelectInputWrapper from "@shared-components/input-wrapper/Select/SelectInputWrapper";
import { ButtonWrapper } from "@shared-components/button-wrapper/ButtonWrapper";
import { Box, HStack, VStack } from "native-base";
interface FormWrapperProps {
  data: IFormData[];
  onSubmit: (data: any) => void;
  loading?: boolean;
  submitAction?: string;
}

const FormWrapper = (props: FormWrapperProps) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    reset();
  };

  const renderInputFields = () => {
    return props.data.map((field, i) => {
      return (
        <VStack w="100%" key={i} style={{ marginBottom: 12 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name={field.fieldName as any}
            render={({ field: { onChange, onBlur, value } }) => {
              const inputProps: InputProps = {
                ...field,
                onChange,
                onBlur,
                value,
              };

              if (field.type === InputType.PASSWORD)
                return <InputWithPassword {...inputProps} />;

              if (field.type === InputType.SELECT)
                return <SelectInputWrapper {...inputProps} />;

              return <TextInputWrapper {...inputProps} />;
            }}
          />
          {errors["fieldName"] && <Text>{field.errorText}</Text>}
        </VStack>
      );
    });
  };

  return (
    <Box
      style={{
        width: "100%",
        flexDirection: "column",
      }}
    >
      <HStack flexDirection="column">{renderInputFields()}</HStack>

      <HStack marginTop={4} minWidth={100}>
        <ButtonWrapper
          style={{
            marginTop: 20,
          }}
          maxWidth
          loading={props.loading}
          primary
          onPress={handleSubmit((data) => {
            props.onSubmit(data);
            handleReset();
          })}
        >
          {props.submitAction ?? "Submit"}
        </ButtonWrapper>
      </HStack>
    </Box>
  );
};

export default FormWrapper;
