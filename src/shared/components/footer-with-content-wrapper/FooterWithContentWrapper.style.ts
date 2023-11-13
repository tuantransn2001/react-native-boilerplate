import { COLORS } from "@shared-constants";
import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  container: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    container: {
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      backgroundColor: COLORS.WHITE,
      borderWidth: 1,
      borderColor: COLORS.DISABLE,
      padding: 20,
      gap: 12,
      justifyContent: "space-between",
    },
  });
};
