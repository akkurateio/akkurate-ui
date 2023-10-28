import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFolderOpened: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5a4 4 0 0 0-4 4v2.345a3 3 0 0 0-1.578 3.027l1.25 10A3 3 0 0 0 4.648 27H26a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H6Zm21.974 18.32c.017-.104.026-.21.026-.32V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2h8.5l2 2h9.398a3 3 0 0 1 2.97 2.576l1.106 7.745ZM3.398 13h8.274l2 2h10.226a1 1 0 0 1 .99.859l1.143 8A1 1 0 0 1 25.04 25H4.648a1 1 0 0 1-.992-.876l-1.25-10A1 1 0 0 1 3.398 13Z"
      />
    </ReactSVG.G>,
  ],
})
