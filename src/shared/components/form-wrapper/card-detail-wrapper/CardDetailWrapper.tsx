import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IFormData } from "../shared/FormWrapper.interface";

interface CardDetailProps {}

const fields: IFormData[] = [
  {
    fieldName: "",
    label: "",
    placeholder: "",
    caption: "",
    errorText: "",
    type: "",
    options: "",
  },
];

const CardDetail = (props: CardDetailProps) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClear = () => {
    reset();
  };

  const handleSubmit = (data) => {};

  return (
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
      }}
    />
  );
};
export default CardDetail;
