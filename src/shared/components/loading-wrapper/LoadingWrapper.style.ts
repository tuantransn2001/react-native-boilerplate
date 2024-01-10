import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  indicator: ViewStyle;
}
export default () =>
  StyleSheet.create<Style>({
    indicator: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
