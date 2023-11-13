import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisEqualizer: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Rect x="2" y="27" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="12" y="27" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="12" y="23" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="23" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="2" y="23" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="15" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="2" y="15" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="2" y="11" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="12" y="19" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="19" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="2" y="19" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="11" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="7" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="3" width="8" height="2" rx="1" />
      <ReactSVG.Rect x="22" y="27" width="8" height="2" rx="1" />
    </ReactSVG.G>,
  ],
})
