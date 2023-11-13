import { ViewStyle } from "react-native";
import { InputType } from "./FormWrapper.enum";

export interface IFormData {
  fieldName: string;
  label: string;
  placeholder?: string;
  caption?: string;
  errorText?: string;
  type: InputType;
  options?: {
    label: string;
    value: string;
  }[];
  rules?: Record<string, string | boolean>;
  style?: ViewStyle;
}
