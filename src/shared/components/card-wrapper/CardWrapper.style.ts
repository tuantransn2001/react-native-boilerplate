import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  tab: ViewStyle;
}
export default () =>
  StyleSheet.create<Style>({
    container: {
      flexDirection: "column",
      gap: 20,
    },
    tab: {
      height: 192,
      alignItems: "center",
      justifyContent: "center",
    },
  });
