import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  container: ViewStyle;
  buttonsWrapper: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    container: { flex: 1, flexDirection: "column", gap: 10 },
    buttonsWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
    },
  });
};
