import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBackward: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M11.293 2.293a1 1 0 1 1 1.414 1.414L7.414 9H17.5C23.299 9 28 13.701 28 19.5S23.299 30 17.5 30h-11c-.128 0-.256-.002-.382-.007A1 1 0 1 1 6 28v-.015c.165.01.332.015.5.015h11a8.5 8.5 0 0 0 0-17H7.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7Z" />
    </>,
  ],
})
