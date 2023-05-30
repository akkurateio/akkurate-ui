import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisAlignCenter: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2H4Zm3 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H7Zm1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 3a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H5Zm-2 5a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm8 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Z"
      />
    </>,
  ],
})
