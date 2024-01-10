/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
export const useForceUpdate = () => {
  const [value, setValue] = React.useState(0);
  return {
    dependency: value,
    forceUpdate: () => {
      console.log("component force update!");

      return setValue((prev) => prev + 1);
    },
  };
};
