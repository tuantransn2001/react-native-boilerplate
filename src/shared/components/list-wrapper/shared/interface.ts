import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IListItem {
  id?: string;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
  title?: string;
  loading?: boolean;
  timeStamp?: string;
  recentText?: string;
  imgUrl?: string;
  onPress?: (payload?: any) => void;
}
