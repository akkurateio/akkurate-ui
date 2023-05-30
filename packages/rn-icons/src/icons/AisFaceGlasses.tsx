import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceGlasses = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Rect
        x="7"
        y="11"
        width="7"
        height="7"
        rx="3"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Rect
        x="18"
        y="11"
        width="7"
        height="7"
        rx="3"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Rect x="11" y="22" width="10" height="2" rx="1" />
      <ReactSVG.Path d="M3 12h4v2H3zM14 12h4v2h-4zM25 12h4v2h-4z" />
    </>,
  ],
})
