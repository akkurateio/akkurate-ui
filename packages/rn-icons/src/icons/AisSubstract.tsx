import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSubstract: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M25 17H7a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2Z" />
    </>,
  ],
})
