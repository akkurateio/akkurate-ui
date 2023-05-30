import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBurger: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M7 8h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM25 12H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 18H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 24H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" />
    </>,
  ],
})
