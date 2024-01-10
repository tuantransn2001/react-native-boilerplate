import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  captionContainer: ViewStyle;
  captionText: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    captionContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    captionText: {
      fontWeight: "400",
      color: "#8F9BB3",
    },
  });
};
