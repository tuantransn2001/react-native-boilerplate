import { COLORS } from "@shared-constants";
import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  section: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    section: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: COLORS.DISABLE,
      flexDirection: "column",
      gap: 16,
      marginBottom: 20,
    },
  });
};
