import React from "react";

export const useCountDown = () => {
  const [percent, setPercent] = React.useState<number>(0);

  const animate = React.useCallback(() => {
    const intervalId = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return prev;
        }
        return (prev += 1);
      });
    }, 30);
  }, []);

  React.useEffect(() => {
    animate();
  }, [animate]);

  return percent;
};
