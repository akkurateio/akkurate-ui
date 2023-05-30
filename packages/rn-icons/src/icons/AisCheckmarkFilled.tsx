import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCheckmarkFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Zm6.715 8.715-8 8a.997.997 0 0 1-1.414 0l-4.008-4.008a.999.999 0 1 1 1.414-1.414l3.301 3.301 7.293-7.293a.999.999 0 1 1 1.414 1.414Z" />
    </>,
  ],
})
