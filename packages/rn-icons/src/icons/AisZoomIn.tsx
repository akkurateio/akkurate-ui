import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisZoomIn = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm0 22c-5.514 0-10-4.486-10-10S10.486 6 16 6s10 4.486 10 10-4.486 10-10 10Z" />
      <ReactSVG.Path d="M21 15h-4v-4a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2Z" />
    </>,
  ],
})
