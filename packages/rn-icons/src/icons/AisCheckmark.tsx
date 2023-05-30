import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCheckmark: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M13.013 23.001a.996.996 0 0 1-.707-.293l-6.005-6.005a.999.999 0 1 1 1.414-1.414l5.298 5.298 11.28-11.28a.999.999 0 1 1 1.414 1.414L13.72 22.708a.997.997 0 0 1-.707.293Z" />
    </>,
  ],
})
