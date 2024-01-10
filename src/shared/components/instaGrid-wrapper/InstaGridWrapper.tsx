/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { View, Dimensions, ScrollView, ActivityIndicator } from "react-native";
const { width } = Dimensions.get("window");
import * as _ from "lodash";
import MyImage from "./myImage/MyImage";
import createStyle from "./InstaGridWrapper.style";
import { IInstaGridItem } from "./shared/IInstaGridItem.interface";

interface InstaGridProps {
  data: IInstaGridItem[];
  columns: number;
  onEndReachedThreshold: number;
  onEndReached: () => void;
  loading?: boolean;
  onItemClick: (item: IInstaGridItem) => void;
}

const InstaGrid: React.FC<InstaGridProps> = ({
  data,
  columns,
  onEndReachedThreshold,
  onEndReached,
  loading = false,
  onItemClick,
}) => {
  const styles = React.useMemo(() => createStyle(width), []);
  const groupEveryNthRow = 3;

  let currentRow = 0;
  let bigImageSide = "right";
  const rowsArray: any[] = _.chunk(data, columns);

  const renderGroupedItem = (row: IInstaGridItem[]) => {
    const [smallImage1, smallImage2, largeImage] = row;
    if (bigImageSide === "right") {
      bigImageSide = "left";
      return (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
        </View>
      );
    } else {
      bigImageSide = "right";
      return (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
          <View style={styles.groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
        </View>
      );
    }
  };

  const renderSingleItem = (item: IInstaGridItem, index: number) => {
    return (
      <View style={styles.gridStyle} key={index}>
        <MyImage
          style={styles.imageThumbnail}
          sourceObj={item}
          onPress={() => {
            onItemClick(item);
          }}
        />
      </View>
    );
  };

  const renderCell = (row: IInstaGridItem[], index: number) => {
    if (row.length >= columns && currentRow % groupEveryNthRow === 0) {
      currentRow++;
      return <View key={index}>{renderGroupedItem(row)}</View>;
    }
    currentRow++;
    return (
      <View style={{ flexDirection: "row" }} key={index}>
        {row.map((item, index) => {
          return renderSingleItem(item, index);
        })}
      </View>
    );
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) =>
    //   ScrollView["onScroll"]
    {
      const paddingToBottom = 20;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };

  const renderFooter = () => {
    return (
      <View style={{ marginBottom: 16 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <ScrollView
      scrollEventThrottle={onEndReachedThreshold}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          onEndReached();
        }
      }}
    >
      <View style={styles.mainContainer}>
        {rowsArray.map((row, index) => {
          return renderCell(row, index);
        })}
      </View>
      {loading && renderFooter()}
    </ScrollView>
  );
};

export default InstaGrid;
