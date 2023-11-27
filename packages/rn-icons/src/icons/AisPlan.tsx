import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPlan: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M11 10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11ZM10 15a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1ZM13 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6ZM14 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM11 24a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4v1a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4H10Zm12 2H10a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM4 11a2 2 0 0 1 2-2v14a2 2 0 0 1-2-2V11Zm24 10a2 2 0 0 1-2 2V9a2 2 0 0 1 2 2v10Z"
      />
    </ReactSVG.G>,
  ],
})
