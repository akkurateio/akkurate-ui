import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisZoomOutFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16C4 9.383 9.383 4 16 4s12 5.383 12 12-5.383 12-12 12S4 22.617 4 16Zm6 0a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Z"
      />
    </ReactSVG.G>,
  ],
})
