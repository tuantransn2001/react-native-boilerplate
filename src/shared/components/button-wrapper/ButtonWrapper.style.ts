import { COLORS, FONT_SIZES } from "@shared-constants";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  common: ViewStyle;
  loading: ViewStyle;
  disabled: ViewStyle;
  primary: ViewStyle;
  tertiary: ViewStyle;
  fullWidth: ViewStyle;
  textDefault: ViewStyle;
  secondPrimary: ViewStyle;
  ghost: ViewStyle;
  link: ViewStyle;
}
export default () =>
  StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    common: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      width: "auto",
      borderWidth: 0,
    },
    fullWidth: {
      width: "100%",
    },
    primary: {
      backgroundColor: COLORS.PRIMARY,
    },
    disabled: {
      backgroundColor: COLORS.DISABLE,
    },
    secondPrimary: {
      backgroundColor: COLORS.BLACK,
    },
    tertiary: {
      backgroundColor: COLORS.DISABLE,
      borderWidth: 1,
      borderColor: COLORS.BLACK,
    },
    link: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: COLORS.DISABLE,
    },
    loading: {
      backgroundColor: COLORS.DISABLE,
      paddingTop: 14,
    },
    textDefault: {
      fontSize: FONT_SIZES[4],
      fontWeight: "normal",
    },
    ghost: {
      backgroundColor: "transparent",
    },
  });
