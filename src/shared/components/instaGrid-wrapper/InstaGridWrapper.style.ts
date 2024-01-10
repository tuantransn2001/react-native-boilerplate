import { StyleSheet, ViewStyle } from "react-native";
interface Style {
  mainContainer: ViewStyle;
  groupedGridContainer: ViewStyle;
  imageThumbnail: ViewStyle;
  imageThumbnailLarge: ViewStyle;
  gridStyle: ViewStyle;
}

const DEFAULT_BORDER_RADIUS = 0;

export default (width: number) => {
  return StyleSheet.create<Style>({
    mainContainer: {
      width: "100%",
    },
    groupedGridContainer: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
    imageThumbnail: {
      borderRadius: DEFAULT_BORDER_RADIUS,
      height: width / 3 - 12,
      width: width / 3 - 12,
      resizeMode: "stretch",
      alignSelf: "flex-start",
      justifyContent: "flex-start",
    },
    imageThumbnailLarge: {
      borderRadius: DEFAULT_BORDER_RADIUS,
      height: width * 0.6 + 12,
      width: width * 0.6 + 12,
      marginLeft: 4,
      resizeMode: "stretch",
      alignSelf: "flex-start",
      justifyContent: "flex-start",
    },
    gridStyle: {
      margin: 4,
    },
  });
};
