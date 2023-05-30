import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowRightUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M23 8h-9a1 1 0 1 0 0 2h6.586L7.293 23.293a.999.999 0 1 0 1.414 1.414L22 11.414V18a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
    </ReactSVG.G>,
  ],
})
