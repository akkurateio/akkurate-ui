import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisVideoFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M6 24h14c1.103 0 2-.897 2-2v-2.612l4.684 1.561A1 1 0 0 0 28.001 20v-8a1 1 0 0 0-1.317-.949L22 12.612V10c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2Z" />
    </ReactSVG.G>,
  ],
})
