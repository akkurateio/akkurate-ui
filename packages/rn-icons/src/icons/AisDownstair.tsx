import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDownstair: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8a2 2 0 0 0-2-2H3a1 1 0 0 0 0 2h5v4a2 2 0 0 0 2 2h5v4a2 2 0 0 0 2 2h5v4a2 2 0 0 0 2 2h5a1 1 0 1 0 0-2h-5v-4a2 2 0 0 0-2-2h-5v-4a2 2 0 0 0-2-2h-5V8Z"
      />
    </ReactSVG.G>,
  ],
})
