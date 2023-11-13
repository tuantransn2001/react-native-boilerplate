import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  container: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    container: { minHeight: "auto", flex: 1 },
  });
};
