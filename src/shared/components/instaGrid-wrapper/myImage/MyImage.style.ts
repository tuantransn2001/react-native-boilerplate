import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  activityIndicator: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    activityIndicator: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });
};
