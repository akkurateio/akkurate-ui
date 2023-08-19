import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCashRegister: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Mask id="a" fill="#fff">
        <ReactSVG.Rect x="2" y="18" width="28" height="10" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="2"
        y="18"
        width="28"
        height="10"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#a)"
      />
      <ReactSVG.Mask id="b" fill="#fff">
        <ReactSVG.Rect x="7" y="14" width="8" height="6" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="7"
        y="14"
        width="8"
        height="6"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#b)"
      />
      <ReactSVG.Rect
        x="25.5"
        y="13.5"
        width="1"
        height="6"
        rx=".5"
        stroke="#000"
      />
      <ReactSVG.Rect
        x="2.5"
        y="23.5"
        width="1"
        height="6"
        rx=".5"
        transform="rotate(-90 2.5 23.5)"
        stroke="#000"
      />
      <ReactSVG.Mask id="c" fill="#fff">
        <ReactSVG.Rect x="22" y="8" width="8" height="6" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="22"
        y="8"
        width="8"
        height="6"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#c)"
      />
      <ReactSVG.Mask id="d" fill="#fff">
        <ReactSVG.Rect x="4" y="4" width="14" height="12" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="4"
        y="4"
        width="14"
        height="12"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#d)"
      />
    </ReactSVG.G>,
  ],
})
