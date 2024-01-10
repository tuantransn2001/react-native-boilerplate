import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export function useSwipe(
  onSwipeLeft?: any,
  onSwipeRight?: any,
  rangeOffset = 4,
) {
  let firstTouch = 0;

  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageX;
  }

  function onTouchEnd(e: any) {
    const positionX = e.nativeEvent.pageX;
    const range = windowWidth / rangeOffset;

    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight(e);
    } else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft(e);
    }
  }

  return { onTouchStart, onTouchEnd };
}
