import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSuitcaseBusiness: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h5a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h5ZM4 22v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2H4Zm24-2H4v-8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v8ZM13 6h6v2h-6V6Z"
      />
    </ReactSVG.G>,
  ],
})
