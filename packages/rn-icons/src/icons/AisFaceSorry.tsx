import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceSorry = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Rect
        x="8"
        y="19"
        width="16"
        height="4"
        rx="2"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Path d="M11 20h2v2h-2zM15 20h2v2h-2zM19 20h2v2h-2z" />
    </>,
  ],
})
