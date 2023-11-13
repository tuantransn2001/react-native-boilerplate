import * as React from "react";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import InfiniteScroll from "react-infinite-scroller";
import { View } from "react-native";

const InfinityScroll = () => {
  const handleFetch = () => console.log("fetch");

  return (
    <InfiniteScroll
      loadMore={handleFetch}
      loader={<TextWrapper>Loading</TextWrapper>}
    >
      <View>
        <TextWrapper>Test</TextWrapper>
      </View>
    </InfiniteScroll>
  );
};
export default InfinityScroll;
