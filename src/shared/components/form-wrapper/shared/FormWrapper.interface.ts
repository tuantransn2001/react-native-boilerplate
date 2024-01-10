import { ViewStyle } from "react-native";
import { InputType } from "./FormWrapper.enum";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IFormData {
  fieldName: string;
  label: string;
  placeholder?: string;
  caption?: string;
  errorText?: string;
  type: InputType;
  startIcon?: IconDefinition;
  options?: {
    label: string;
    value: string;
  }[];
  rules?: Record<string, string | boolean>;
  style?: ViewStyle;
}
