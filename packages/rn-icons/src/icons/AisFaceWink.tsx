import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceWink = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Rect
        x="17.5"
        y="12.5"
        width="7"
        height="1"
        rx=".5"
        stroke="#000"
      />
      <ReactSVG.Rect
        x="10"
        y="12"
        width="2"
        height="2"
        rx="1"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.707 20.243a6 6 0 0 0 8.485 0 1 1 0 0 1 1.415 1.414 8 8 0 0 1-11.314 0 1 1 0 1 1 1.414-1.414Z"
      />
    </>,
  ],
})
