import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMarginY: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M2 5a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12H9v8h14v-8ZM9 10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H9Z"
      />
      <ReactSVG.Path d="M2 27a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
    </ReactSVG.G>,
  ],
})
