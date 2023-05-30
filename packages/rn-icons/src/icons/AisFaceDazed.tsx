import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceDazed: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Path
        d="M8 20c1.333 0 1.333 2 2.667 2C12 22 12 20 13.333 20c1.334 0 1.334 2 2.667 2 1.333 0 1.333-2 2.667-2C20 20 20 22 21.333 22c1.334 0 1.334-2 2.667-2"
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
      />
    </>,
  ],
})
