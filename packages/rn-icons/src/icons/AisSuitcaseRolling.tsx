import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSuitcaseRolling: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M15 13a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V13Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4v4h-1a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1v1a1 1 0 1 0 2 0v-1h6v1a1 1 0 1 0 2 0v-1h1a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-1V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Zm8 0h-6v4h6V4Zm-9 22h1V10h-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm3-16v16h6V10h-6Zm9 16h-1V10h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"
      />
    </ReactSVG.G>,
  ],
})
