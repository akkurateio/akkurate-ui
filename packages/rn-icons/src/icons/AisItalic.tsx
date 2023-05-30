import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisItalic: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14H25Z" />
    </>,
  ],
})
