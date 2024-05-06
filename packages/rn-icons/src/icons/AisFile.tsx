import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFile: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 26 8.828V28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm12 0H8v24h16V10h-5a1 1 0 0 1-1-1V4Zm5.172 4L20 4.828V8h3.172Z"
      />
    </ReactSVG.G>,
  ],
})
