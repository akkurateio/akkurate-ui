import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisIntervalSplit: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Rect x="5" y="9" width="2" height="14" rx="1" />
      <ReactSVG.Circle cx="6" cy="6" r="3" stroke="#000" stroke-width="2" />
      <ReactSVG.Circle cx="26" cy="6" r="3" stroke="#000" stroke-width="2" />
      <ReactSVG.Circle cx="6" cy="26" r="3" stroke="#000" stroke-width="2" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 25v2A18 18 0 0 0 27 9h-2A16 16 0 0 1 9 25Z"
      />
    </ReactSVG.G>,
  ],
})
