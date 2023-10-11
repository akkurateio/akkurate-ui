import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBankCheck: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M28 6H4a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2ZM4 10h24a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2ZM8 16a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8ZM7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM22 22a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 28a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h24ZM5 14h22v12H5V14Z"
      />
    </ReactSVG.G>,
  ],
})
