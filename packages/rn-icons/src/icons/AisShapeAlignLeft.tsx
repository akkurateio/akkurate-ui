import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisShapeAlignLeft: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M6 2a1 1 0 0 0-1 1v26a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11V9h-6v2h6Zm2-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9ZM25 23v-6H11v6h14Zm2-6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6Z"
      />
    </ReactSVG.G>,
  ],
})
