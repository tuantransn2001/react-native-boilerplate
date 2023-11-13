/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from "react";
import { Button } from "@ui-kitten/components";
import createStyles from "./ButtonWrapper.style";
import { ViewStyle } from "react-native";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { COLORS } from "@shared-constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import LoadingIndicator from "@shared-components/loading-wrapper/LoadingWrapper";
import { Appearance, Size } from "./enum/style.enum";
interface ButtonWrapperProps extends PropsWithChildren {
  primary?: boolean;
  link?: boolean;
  ghost?: boolean;
  loading?: boolean;
  disabled?: boolean;
  tertiary?: boolean;
  maxWidth?: boolean;
  secondPrimary?: boolean;
  style?: ViewStyle;
  StartIcon?: IconDefinition;
  onPress?: () => void;
  onPressOut?: () => void;
  [key: string]: any;
}

export const ButtonWrapper = ({
  ghost,
  disabled,
  primary,
  secondPrimary,
  tertiary,
  maxWidth,
  StartIcon,
  children,
  loading,
  style: customStyle,
  link,
  onPress,
  onPressOut,
  ...rest
}: ButtonWrapperProps) => {
  const styles = React.useMemo(() => createStyles(), []);
  let textColor = COLORS.WHITE;
  let commonStyle = styles.common;

  // ? Primary
  if (primary) {
    commonStyle = { ...commonStyle, ...styles.primary };
  }

  // ? Full width or small
  if (maxWidth) {
    commonStyle = { ...commonStyle, ...styles.fullWidth };
  }

  // ? Second primary
  if (secondPrimary) {
    commonStyle = { ...commonStyle, ...styles.secondPrimary };
  }

  // ? Tertiary
  if (tertiary) {
    commonStyle = { ...commonStyle, ...styles.tertiary };
    textColor = COLORS.BLACK;
  }
  // ? Link
  if (link) {
    commonStyle = { ...commonStyle, ...styles.link };
    textColor = COLORS.BLACK;
  }

  // ? Ghost
  if (ghost) {
    textColor = COLORS.BLACK;
  }

  // ? Disabled
  if (disabled) {
    commonStyle = { ...commonStyle, ...styles.disabled };
    textColor = COLORS.WHITE;
  }

  const renderStartIcon = () => {
    if (loading) return <LoadingIndicator />;
    if (StartIcon)
      return (
        <FontAwesomeIcon color={textColor} icon={StartIcon as IconDefinition} />
      );

    return <React.Fragment />;
  };

  return (
    <Button
      status="success"
      onPress={onPress}
      disabled={disabled}
      accessoryLeft={renderStartIcon()}
      appearance={Appearance.filled}
      size={Size.medium}
      style={{ ...commonStyle, ...customStyle }}
      onPressOut={onPressOut}
      {...rest}
    >
      {children ? (
        <TextWrapper color={textColor} center style={styles.textDefault}>
          {children}
        </TextWrapper>
      ) : (
        <></>
      )}
    </Button>
  );
};
