import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisChevronDown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 23a.997.997 0 0 1-.707-.293l-11-11a.999.999 0 1 1 1.414-1.414L16 20.586l10.293-10.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 16 23Z" />
    </>,
  ],
})
