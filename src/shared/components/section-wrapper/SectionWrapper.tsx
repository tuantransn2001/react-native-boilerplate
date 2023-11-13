import React, { PropsWithChildren } from "react";
import createStyle from "./SectionWrapper.style";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";
import { View } from "react-native";

interface SectionProps extends PropsWithChildren {
  title?: string;
}

const SectionWrapper = ({ title, children }: SectionProps) => {
  const styles = React.useMemo(() => createStyle(), []);
  return (
    <View style={styles.section}>
      {title && (
        <TextWrapper bold h4>
          {title}
        </TextWrapper>
      )}
      {children}
    </View>
  );
};

export default SectionWrapper;
