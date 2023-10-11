import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSuccess: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="m14.715 20.715 8-8a.999.999 0 1 0-1.414-1.414l-7.293 7.293-3.301-3.301a.999.999 0 1 0-1.414 1.414l4.008 4.008a.997.997 0 0 0 1.414 0Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13Zm-2 0c0 6.075-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5s11 4.925 11 11Z"
      />
    </ReactSVG.G>,
  ],
})
