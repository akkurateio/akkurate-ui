import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCopy: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M25 4H11C9.346 4 8 5.346 8 7v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Zm1 17c0 .551-.448 1-1 1H11c-.552 0-1-.449-1-1V7c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v14ZM22 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </ReactSVG.G>,
  ],
})
