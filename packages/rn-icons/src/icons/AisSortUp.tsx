import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSortUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M7 6a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H7ZM13 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H13ZM18 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM23 24a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
    </>,
  ],
})
