import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisTerminal: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M27 6H5C3.346 6 2 7.346 2 9v14c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3Zm1 17c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1V9c0-.552.449-1 1-1h22c.551 0 1 .448 1 1v14Z" />
      <ReactSVG.Path d="M7.707 12.293a.999.999 0 1 0-1.414 1.414L8.586 16l-2.293 2.293a.999.999 0 1 0 1.414 1.414l3-3a.999.999 0 0 0 0-1.414l-3-3ZM18 18h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Z" />
    </>,
  ],
})
