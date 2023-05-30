import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDownToBottom: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M15.293 18.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 1 0-1.414-1.414L16 16.586 7.707 8.293a.999.999 0 1 0-1.414 1.414l9 9ZM27 23H5a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z" />
    </>,
  ],
})
