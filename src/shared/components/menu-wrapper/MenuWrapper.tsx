import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { Box, Menu } from "native-base";
import * as React from "react";
import { Pressable, View } from "react-native";
import { IMenuItem } from "./shared/MenuWrapper.interface";
interface MenuWrapperProps {
  data: IMenuItem[];
}
const MenuWrapper = (props: MenuWrapperProps) => {
  return (
    <Box w="90%" alignItems="center">
      <Menu
        marginLeft={-16}
        w={140}
        defaultIsOpen
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <FontAwesomeIcon size={18} icon={faEllipsis} />
            </Pressable>
          );
        }}
      >
        {props.data.map((item, i) => (
          <Menu.Item key={i} onPress={item.onPress && item.onPress}>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              {item.startIcon && (
                <FontAwesomeIcon size={14} icon={item.startIcon} />
              )}
              <TextWrapper h5 bold>
                {item.text}
              </TextWrapper>
            </View>
          </Menu.Item>
        ))}
      </Menu>
    </Box>
  );
};
export default MenuWrapper;
