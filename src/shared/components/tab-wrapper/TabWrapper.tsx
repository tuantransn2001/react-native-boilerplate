/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import createStyle from "./TabWrapper.style";
import { useWindowDimensions } from "react-native";
import { View } from "native-base";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { ITabWrapper } from "./shared/TabWrapper.interface";
import TextWrapper from "@shared-components/text-wrapper/TextWrapper";

interface TabWrapperProps {
  data: ITabWrapper[];
}

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    getLabelText={({ route }) => (
      <TextWrapper h5 bold>
        {route.title}
      </TextWrapper>
    )}
    indicatorStyle={{ backgroundColor: "black", width: "40%", left: 20 }}
    style={{
      backgroundColor: "transparent",
      color: "black",
    }}
  />
);

const TabWrapper = (props: TabWrapperProps) => {
  const layout = useWindowDimensions();

  const routes = React.useMemo(
    () => props.data.map(({ key, title }) => ({ key, title })),
    [props.data],
  );

  const renderScene = React.useMemo(
    () =>
      props.data.reduce((res: any, { key, component }) => {
        res[key] = component;
        return res;
      }, {}),
    [props.data],
  );

  const [index, setIndex] = React.useState(0);

  const styles = React.useMemo(() => createStyle(), []);
  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={SceneMap(renderScene as any)}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};
export default TabWrapper;
