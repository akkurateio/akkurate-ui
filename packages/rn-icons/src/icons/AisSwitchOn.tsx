import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSwitchOn = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8a8 8 0 1 0 0 16h12a8 8 0 1 0 0-16H10Zm12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </>,
  ],
})
