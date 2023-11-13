import { View } from "native-base";
import createStyles from "./FooterWithContentWrapper.style";
import * as React from "react";
import { Direction } from "./enums/enum";

interface FooterWithContentWrapperProps extends React.PropsWithChildren {
  direction?: Direction;
}

const FooterWithContentWrapper = ({
  children,
  direction,
}: FooterWithContentWrapperProps) => {
  const styles = React.useMemo(() => createStyles(), []);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: direction ?? "row",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default FooterWithContentWrapper;
