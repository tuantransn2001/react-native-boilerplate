/* eslint-disable max-len */
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { Avatar, Box, FlatList, HStack, Spacer, VStack } from "native-base";
import React from "react";
import { IListItem } from "./shared/interface";
import { COLORS } from "@shared-constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, View } from "react-native";

interface ListWrapperProps {
  data: IListItem[];
}

const ListWrapper = ({ data }: ListWrapperProps) => {
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: COLORS.DISABLE,
            }}
            borderColor={COLORS.DISABLE}
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="3"
          >
            <Pressable onPress={item.onPress}>
              <HStack
                space={[2, 3]}
                alignItems="center"
                justifyContent="flex-start"
              >
                <VStack
                  flexDirection="row"
                  w="100%"
                  justifyContent="space-between"
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    {item.startIcon && (
                      <FontAwesomeIcon icon={item.startIcon} />
                    )}
                    <View>
                      <TextWrapper bold>{item.title}</TextWrapper>
                      <TextWrapper>{item.recentText}</TextWrapper>
                    </View>
                  </View>
                  <>
                    {item.imgUrl && (
                      <Avatar
                        size="48px"
                        source={{
                          uri: item.imgUrl,
                        }}
                      />
                    )}
                    {item.endIcon && <FontAwesomeIcon icon={item.endIcon} />}
                  </>
                </VStack>
                <Spacer />
              </HStack>
            </Pressable>
          </Box>
        )}
      />
    </Box>
  );
};
export default ListWrapper;
