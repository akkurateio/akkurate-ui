import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowSwitchVertical: FunctionComponent<IIconProps> = createIcon(
  {
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path d="M9.382 2.077a1.001 1.001 0 0 0-1.09.216l-6 6a.999.999 0 1 0 1.415 1.414L8 5.414V21a1 1 0 0 0 2 0V5.414l4.293 4.293a.999.999 0 1 0 1.414-1.414l-6-6a1.01 1.01 0 0 0-.325-.216ZM22.617 29.924a1.001 1.001 0 0 0 1.09-.216l6-6a.999.999 0 1 0-1.415-1.414L24 26.587V11a1 1 0 0 0-2 0v15.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414l6 6c.092.092.203.165.325.216Z" />
      </ReactSVG.G>,
    ],
  },
)
