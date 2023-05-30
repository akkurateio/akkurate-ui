import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSwitchOff = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M10 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8Zm8-6h12a6 6 0 0 1 0 12H10a6 6 0 0 1 0-12Z"
      />
    </>,
  ],
})
