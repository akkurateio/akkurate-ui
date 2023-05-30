import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceLookDown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      />
      <ReactSVG.Rect
        x="13.5"
        y="22.5"
        width="5"
        height="1"
        rx=".5"
        stroke="#000"
      />
      <ReactSVG.Rect
        x="6"
        y="11"
        width="8"
        height="8"
        rx="4"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Rect
        x="9"
        y="16"
        width="2"
        height="2"
        rx="1"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Rect
        x="21"
        y="16"
        width="2"
        height="2"
        rx="1"
        stroke="#000"
        stroke-width="2"
      />
      <ReactSVG.Rect
        x="18"
        y="11"
        width="8"
        height="8"
        rx="4"
        stroke="#000"
        stroke-width="2"
      />
    </>,
  ],
})
