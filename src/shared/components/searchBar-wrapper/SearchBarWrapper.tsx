import * as React from "react";
import { Icon, Input } from "native-base";
import { FONT_SIZES } from "@shared-constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "@react-navigation/native";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from "react-native";
import {
  faMicrophone,
  faSearch,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useKeyboardVisible } from "hooks/common/useKeyboardVisible";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface SearchBarWrapperProps {
  maxW?: string;
  onChangeText?: (value: string) => void;
  onValueClear?: () => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const SearchBarWrapper: React.FC<SearchBarWrapperProps> = (props) => {
  const inputRef = React.useRef<TextInput | null>(null);
  const isKeyboardVisible = useKeyboardVisible();
  const theme = useTheme();
  const { colors } = theme;
  const handleClearText = React.useCallback(() => {
    inputRef?.current?.clear();
    props.onValueClear?.();
  }, [props]);

  const handleOpenMicrophone = React.useCallback(() => {
    console.log("handle access microphone...");
  }, []);
  const renderRightIcon = React.useCallback(() => {
    if (!isKeyboardVisible)
      return (
        <RNBounceable
          style={{
            marginRight: 10,
            left: 22,
          }}
          onPress={handleOpenMicrophone}
        >
          <Icon
            as={
              <FontAwesomeIcon
                size={14}
                color={colors.black}
                icon={faMicrophone}
              />
            }
            size={5}
            ml="2"
            color="muted.400"
          />
        </RNBounceable>
      );

    return (
      <RNBounceable
        style={{
          marginRight: 10,
          left: 18,
        }}
        onPress={handleClearText}
      >
        <Icon
          as={
            <FontAwesomeIcon size={12} color={colors.black} icon={faTrashCan} />
          }
          size={5}
          ml="2"
          color="muted.400"
        />
      </RNBounceable>
    );
  }, [isKeyboardVisible, colors, handleClearText, handleOpenMicrophone]);

  return (
    <Input
      ref={inputRef}
      onFocus={(e) => props.onFocus?.(e)}
      onChangeText={props.onChangeText}
      borderRadius={14}
      style={{
        fontSize: FONT_SIZES[3],
        maxWidth: props.maxW || "90%",
      }}
      InputLeftElement={
        <Icon
          as={
            <FontAwesomeIcon
              style={{
                marginLeft: 16,
              }}
              size={14}
              color={colors.black}
              icon={faSearch}
            />
          }
          size={5}
          ml="2"
          color="muted.400"
        />
      }
      InputRightElement={renderRightIcon()}
      placeholder="Enter your friend name,group name..."
    />
  );
};
export default SearchBarWrapper;
