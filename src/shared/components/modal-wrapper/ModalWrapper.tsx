/* eslint-disable import/extensions */
import React, { Dispatch, PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { Card, Modal } from "@ui-kitten/components";
import createStyles from "./ModalWrapper.style";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { FONT_WEIGHTS } from "@shared-constants";
interface ModalUsageProps extends PropsWithChildren {
  title: string;
  visible: boolean;
  setVisible: Dispatch<boolean>;
}

export const ModalUsage = ({
  title,
  visible,
  setVisible,
  children,
}: ModalUsageProps): React.ReactElement => {
  const styles = React.useMemo(() => createStyles(), []);

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <Card disabled={true}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            borderBottomWidth: 1,
            paddingBottom: 8,
          }}
        >
          <TextWrapper
            h3
            center
            style={{ fontWeight: FONT_WEIGHTS.SEMI_BOLD } as ViewStyle}
          >
            {title}
          </TextWrapper>
        </View>
        {children}
      </Card>
    </Modal>
  );
};
