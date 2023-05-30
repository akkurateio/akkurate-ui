import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="m22.707 12.293-6-6a1.001 1.001 0 0 0-1.414 0l-6 6a.999.999 0 1 0 1.414 1.414L15 9.414V25a1 1 0 0 0 2 0V9.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
    </ReactSVG.G>,
  ],
})
