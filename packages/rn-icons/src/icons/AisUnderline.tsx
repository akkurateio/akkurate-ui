import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisUnderline = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M4 26h24v2H4v-2Zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 1 0 10 0V5h2v11a7 7 0 0 1-7 7Z" />
    </>,
  ],
})
