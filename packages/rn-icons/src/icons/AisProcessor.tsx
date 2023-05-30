import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisProcessor: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4h2V3a1 1 0 1 1 2 0v4a2 2 0 0 1 2 2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4v2h4a1 1 0 1 1 0 2h-4a2 2 0 0 1-2 2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4a2 2 0 0 1-2-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4v-2H3a1 1 0 1 1 0-2h4a2 2 0 0 1 2-2V3Zm14 6H9v14h14V9Z"
      />
    </ReactSVG.G>,
  ],
})
