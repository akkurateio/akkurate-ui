import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInterval: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Rect x="15" y="9" width="2" height="14" rx="1" />
      <ReactSVG.Circle cx="16" cy="6" r="3" stroke="#000" stroke-width="2" />
      <ReactSVG.Circle cx="16" cy="26" r="3" stroke="#000" stroke-width="2" />
    </ReactSVG.G>,
  ],
})
