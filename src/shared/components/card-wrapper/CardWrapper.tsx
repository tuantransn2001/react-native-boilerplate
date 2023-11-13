/* eslint-disable import/extensions */
import React, { PropsWithChildren } from "react";
import createStyles from "./CardWrapper.style";
import { Image, Pressable, View } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faMedal,
  faStarHalfAlt,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { ICardWrapper } from "./shared/CardWrapper.interface";
import { Badge, Box, Divider, Flex, HStack } from "native-base";
import { COLORS } from "@shared-constants";
import { handleFormatDay } from "utils";

interface CardWrapperProps extends ICardWrapper, PropsWithChildren {}

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <Rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
    <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
    <Rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <Rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <Circle cx="20" cy="20" r="20" />
  </ContentLoader>
);

export const CardWrapper = (props: CardWrapperProps) => {
  const styles = React.useMemo(() => createStyles(), []);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderContents = () => {
    if (props.primary) {
      return <TextWrapper>primary</TextWrapper>;
    }
    if (props.secondPrimary) {
      // ? render slider only
      return (
        <Box alignItems="center">
          <Box w="100%">
            <View>
              <TextWrapper>{props.body.title}</TextWrapper>
              <TextWrapper>
                Private room hosted in home hosted by US
              </TextWrapper>
            </View>
            <Divider
              my="1"
              _light={{
                bg: "muted.800",
              }}
              _dark={{
                bg: "muted.50",
              }}
            />
            <Flex mx="3" direction="row" justify="space-evenly" h="60">
              <TextWrapper>{handleFormatDay(new Date())}</TextWrapper>
              <Divider
                orientation="vertical"
                mx="3"
                _light={{
                  bg: "muted.800",
                }}
                _dark={{
                  bg: "muted.50",
                }}
              />
              <View>
                <TextWrapper>Greater Manchester</TextWrapper>
                <TextWrapper>United Kingdom</TextWrapper>
              </View>
            </Flex>
          </Box>
        </Box>
      );
    }

    if (props.ternary) {
      // ? full size tile
      return (
        <Box alignItems="center">
          <Box w="100%">
            <View
              style={{
                flexDirection: "column",
                gap: 8,
              }}
            >
              <TextWrapper h4 bold>
                {props.body.title}
              </TextWrapper>

              <View>
                <TextWrapper>
                  <FontAwesomeIcon icon={faStarHalfStroke} /> 4.76 - 28 reviewer
                  - <FontAwesomeIcon icon={faMedal} /> Superhost {"\n"}
                  <TextWrapper>
                    Greater Manchester,England,United Kingdom
                  </TextWrapper>
                </TextWrapper>
              </View>
            </View>
          </Box>
        </Box>
      );
    }

    if (props.imageOnly) {
      return <></>;
    }

    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "column",
            gap: 6,
          }}
        >
          <TextWrapper bold h4>
            {props.body.title}
          </TextWrapper>

          {props.body.contents.map((content, i) => (
            <TextWrapper h5 key={i}>
              {content}
            </TextWrapper>
          ))}
        </View>

        <View>
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <TextWrapper>4.76</TextWrapper>
        </View>
      </View>
    );
  };

  const renderBadge = () => {
    if (!props.badge || props.imageOnly) return <React.Fragment />;

    return (
      <HStack
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          zIndex: 999,
          borderRadius: 12,
          backgroundColor: COLORS.WHITE,
        }}
        space={{
          base: 2,
          sm: 4,
        }}
        mx={{
          base: "auto",
          md: 0,
        }}
      >
        <Badge colorScheme="coolGray">
          <TextWrapper bold h5>
            {props.badge}
          </TextWrapper>
        </Badge>
      </HStack>
    );
  };

  return (
    <>
      {props.loading ? (
        <CardLoader />
      ) : (
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              height: 192,
              backgroundColor: "#333333",
              borderRadius: props.imageOnly ? 0 : 12,
              overflow: "hidden",
              shadowColor: "#000000",
            }}
          >
            {renderBadge()}

            <View
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                zIndex: 999,
                backgroundColor: COLORS.WHITE,
                borderRadius: 20,
                padding: 6,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable onPress={() => console.log("add to wishlist")}>
                <FontAwesomeIcon
                  size={12}
                  color={COLORS.PRIMARY}
                  icon={faHeart}
                />
              </Pressable>
            </View>
            <ViewPager
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {props.sliders.map((slide, i) => (
                <Layout style={styles.tab} level="2" key={i}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    source={slide}
                  />
                </Layout>
              ))}
            </ViewPager>
          </View>

          <View>{renderContents()}</View>
        </View>
      )}
    </>
  );
};

export default CardWrapper;
