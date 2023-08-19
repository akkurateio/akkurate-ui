import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPanelRightLine: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm22-2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2V6Zm-2 0H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16V6Z"
      />
    </ReactSVG.G>,
  ],
})
