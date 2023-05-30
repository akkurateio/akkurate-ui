import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisChevronUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M27 22a.997.997 0 0 1-.707-.293L16 11.414 5.707 21.707a.999.999 0 1 1-1.414-1.414l11-11a.999.999 0 0 1 1.414 0l11 11A.999.999 0 0 1 27 22Z" />
    </ReactSVG.G>,
  ],
})
