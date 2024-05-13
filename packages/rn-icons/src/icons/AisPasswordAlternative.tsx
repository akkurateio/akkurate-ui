import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPasswordAlternative: FunctionComponent<IIconProps> = createIcon(
  {
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 4a1 1 0 1 0 0 2h1v4H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20v4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4h4a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4V6h1a1 1 0 1 0 0-2h-4ZM3 12h20v8H3v-8Zm22 0h4v8h-4v-8Z"
        />
      </ReactSVG.G>,
    ],
  },
)
