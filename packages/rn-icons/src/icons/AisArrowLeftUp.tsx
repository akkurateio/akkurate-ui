import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowLeftUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M24.707 23.293 11.414 10H18a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-6.586l13.293 13.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
    </ReactSVG.G>,
  ],
})
