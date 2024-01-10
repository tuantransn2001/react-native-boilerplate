/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Alert,
  HStack,
  IconButton,
  VStack,
  useToast,
  Text,
  CloseIcon,
} from "native-base";
import { Variant } from "./enum/enum";
import { IToastWrapper } from "hooks/toast/shared/useToastWrapper.interface";

const renderTextColorBaseOnVariant = (variant?: Variant) => {
  if (!variant) return null;

  if (variant === Variant.solid) return "lightText";
  if (variant !== Variant.outline) return "darkText";

  return null;
};

const ToastWrapper = ({
  id = uuidv4(),
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}: IToastWrapper) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : "info"}
      variant={variant}
      bottom={7}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={renderTextColorBaseOnVariant(variant)}
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        {description && (
          <Text px="6" color={renderTextColorBaseOnVariant(variant)}>
            {description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};
export default ToastWrapper;
