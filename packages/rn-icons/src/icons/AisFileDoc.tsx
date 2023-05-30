import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFileDoc: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M20.414 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.586L20.414 2ZM20 4.414 23.586 8H20V4.414ZM8 28V4h10v6h6v18H8Z" />
      <ReactSVG.Path d="M10 12h12v2H10v-2ZM10 16h12v2H10v-2ZM10 20h6v2h-6v-2Z" />
    </>,
  ],
})
