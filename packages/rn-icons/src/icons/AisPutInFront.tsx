import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPutInFront: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4 4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4 4 4 0 0 0-4-4H6Zm2 24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2v14a4 4 0 0 1-4 4H8Z"
      />
    </ReactSVG.G>,
  ],
})
