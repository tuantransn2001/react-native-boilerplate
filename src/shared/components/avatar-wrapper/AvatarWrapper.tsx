import * as React from "react";
import { Avatar } from "native-base";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
interface AvatarWrapperProps {
  uri?: string;
  size?: ThemeComponentSizeType<"Avatar">;
}
const AvatarWrapper: React.FC<AvatarWrapperProps> = ({ uri, size }) => {
  const { colors } = useTheme();
  return (
    <RNBounceable
      style={{
        borderWidth: 2,
        borderRadius: 100,
        borderColor: colors.primary,
        padding: 4,
      }}
    >
      <Avatar
        size={size || "md"}
        bg="green.500"
        source={{
          uri: uri,
        }}
      />
    </RNBounceable>
  );
};
export default AvatarWrapper;
