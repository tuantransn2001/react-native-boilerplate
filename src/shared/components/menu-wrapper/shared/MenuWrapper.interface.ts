import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IMenuItem {
  startIcon?: IconDefinition;
  text: string;
  onPress?: (payload?: any) => void;
}
