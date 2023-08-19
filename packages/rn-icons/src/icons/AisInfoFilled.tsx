import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInfoFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm1-19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 11h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v7Z"
      />
    </ReactSVG.G>,
  ],
})
