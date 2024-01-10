/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Keyboard, Platform, KeyboardEvent } from "react-native";

const useKeyboardBottomInset = (): number => {
  const [bottom, setBottom] = React.useState<number>(0);
  const subscriptions = React.useRef<any[]>([]);

  React.useEffect(() => {
    const onKeyboardChange = (e: KeyboardEvent): void => {
      if (
        e.startCoordinates &&
        e.endCoordinates.screenY < e.startCoordinates.screenY
      ) {
        setBottom(e.endCoordinates.height);
      } else {
        setBottom(0);
      }
    };

    if (Platform.OS === "ios") {
      subscriptions.current = [
        Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener("keyboardDidHide", onKeyboardChange),
        Keyboard.addListener("keyboardDidShow", onKeyboardChange),
      ];
    }

    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);

  return bottom;
};

export default useKeyboardBottomInset;
