import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInventory: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16.655 2.244a1 1 0 0 0-1.31 0l-12 10.4A1 1 0 0 0 3 13.4V29a1 1 0 1 0 2 0V13.857l11-9.534 11 9.534V29a1 1 0 1 0 2 0V13.4a1 1 0 0 0-.345-.756l-12-10.4Z" />
      <ReactSVG.Mask id="a" fill="#fff">
        <ReactSVG.Rect x="9" y="20" width="8" height="8" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="9"
        y="20"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#a)"
      />
      <ReactSVG.Mask id="b" fill="#fff">
        <ReactSVG.Rect x="9" y="14" width="8" height="8" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="9"
        y="14"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#b)"
      />
      <ReactSVG.Mask id="c" fill="#fff">
        <ReactSVG.Rect x="15" y="20" width="8" height="8" rx="1" />
      </ReactSVG.Mask>
      <ReactSVG.Rect
        x="15"
        y="20"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#c)"
      />
    </ReactSVG.G>,
  ],
})
