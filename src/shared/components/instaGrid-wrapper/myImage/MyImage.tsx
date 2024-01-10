/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TouchableOpacity, Image, ActivityIndicator } from "react-native";
import createStyle from "./MyImage.style";

interface SourceObject {
  uri: string;
  description: string;
}

interface MyImageProps {
  style: any;
  sourceObj: SourceObject;
  onPress: () => void;
}

const MyImage: React.FC<MyImageProps> = ({ style, sourceObj, onPress }) => {
  const styles = React.useMemo(() => createStyle(), []);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity onPress={onPress}>
      {imageError || !sourceObj.uri ? (
        <Image
          source={require("../../../../assets/stuff/image-load-failed.png")}
          style={style}
          resizeMode="cover"
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <Image
          style={style}
          resizeMode="cover"
          source={{ uri: sourceObj.uri }}
          onError={() => {
            setLoading(false);
            setImageError(true);
          }}
          onLoadEnd={() => setLoading(false)}
        />
      )}
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      )}
    </TouchableOpacity>
  );
};

export default MyImage;
