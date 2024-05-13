import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMarginBottom: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8Zm16 0v8H9v-8h14Z"
      />
      <ReactSVG.Path d="M2 27a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM29 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </ReactSVG.G>,
  ],
})
