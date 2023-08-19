import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCheckmarkFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm6.715-16.285-8 8a.997.997 0 0 1-1.414 0l-4.008-4.008a.999.999 0 1 1 1.414-1.414l3.301 3.301 7.293-7.293a.999.999 0 1 1 1.414 1.414Z"
      />
    </ReactSVG.G>,
  ],
})
