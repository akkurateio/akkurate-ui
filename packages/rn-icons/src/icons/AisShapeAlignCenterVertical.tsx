import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisShapeAlignCenterVertical: FunctionComponent<IIconProps> =
  createIcon({
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 23v-6H9v6h14Zm2-6a2 2 0 0 0-2-2h-6v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v4h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6v4a1 1 0 1 0 2 0v-4h6a2 2 0 0 0 2-2v-6Zm-8-6h2V9h-6v2h4Z"
        />
      </ReactSVG.G>,
    ],
  })
