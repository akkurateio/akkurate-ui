import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDatabase: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M24 2H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 8V4h16v4H8ZM24 12H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM8 18v-4h16v4H8ZM24 22H8c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM8 28v-4h16v4H8Z" />
      <ReactSVG.Path d="M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </>,
  ],
})
