import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInWaitFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M11 2a2 2 0 0 0-2 2v5.24a6 6 0 0 0 2.095 4.556L13.667 16l-2.572 2.204A6 6 0 0 0 9 22.76V28a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.24a6 6 0 0 0-2.095-4.556L18.333 16l2.572-2.204A6 6 0 0 0 23 9.24V4a2 2 0 0 0-2-2H11Z" />
    </ReactSVG.G>,
  ],
})
