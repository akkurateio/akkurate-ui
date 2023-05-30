import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowRightDown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M23 13a1 1 0 0 0-1 1v6.586L8.707 7.293a.999.999 0 1 0-1.414 1.414L20.586 22H14a1 1 0 1 0 0 2h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" />
    </>,
  ],
})
