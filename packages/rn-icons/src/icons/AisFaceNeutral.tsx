import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceNeutral = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Rect x="11" y="20" width="10" height="2" rx="1" />
    </>,
  ],
})
