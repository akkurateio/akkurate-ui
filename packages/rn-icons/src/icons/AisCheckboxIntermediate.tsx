import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCheckboxIntermediate: FunctionComponent<IIconProps> =
  createIcon({
    viewBox: "0 0 32 32",
    path: [
      <>
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm14 11H10v2h12v-2Z"
        />
      </>,
    ],
  })
