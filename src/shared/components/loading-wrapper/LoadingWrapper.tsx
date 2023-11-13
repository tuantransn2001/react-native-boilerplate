import React from "react";
import { Spinner } from "@ui-kitten/components";
import createStyles from "./LoadingWrapper.style";
import { View } from "react-native";

const LoadingIndicator = (): React.ReactElement => {
  const styles = React.useMemo(() => createStyles(), []);
  return (
    <View style={styles.indicator}>
      <Spinner status="basic" size="small" />
    </View>
  );
};

export default LoadingIndicator;
