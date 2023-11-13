import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  modal: ViewStyle;
  backdrop: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
      borderRadius: 0,
      position: "absolute",
      width: "auto",
      right: 10,
    },
  });
};
