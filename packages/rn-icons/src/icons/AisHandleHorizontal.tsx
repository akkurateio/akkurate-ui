import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisHandleHorizontal: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M13 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </ReactSVG.G>,
  ],
})
