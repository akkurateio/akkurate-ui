import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCheckboxChecked: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm13.707 9.707a1 1 0 0 0-1.414-1.414l-6.255 6.255-2.295-2.55a1 1 0 0 0-1.486 1.338l3 3.333a1 1 0 0 0 1.45.038l7-7Z"
      />
    </>,
  ],
})
