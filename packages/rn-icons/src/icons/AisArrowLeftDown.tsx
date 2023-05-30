import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisArrowLeftDown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M24.707 7.293a.999.999 0 0 0-1.414 0L10 20.586V14a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-6.586L24.707 8.707a.999.999 0 0 0 0-1.414Z" />
    </>,
  ],
})
