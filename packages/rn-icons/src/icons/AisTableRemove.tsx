import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisTableRemove = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M21.293 4.293a1 1 0 0 1 1.414 0L25 6.586l2.293-2.293a1 1 0 1 1 1.414 1.414L26.414 8l2.293 2.293a1 1 0 0 1-1.414 1.414L25 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L23.586 8l-2.293-2.293a1 1 0 0 1 0-1.414Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5v4h13a1 1 0 1 1 0 2h-5v6h6v-3a1 1 0 1 1 2 0v3h6v-3a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Zm24 15v6h-6v-6h6Zm-8 0v6h-6v-6h6Zm-8 0v6H5v-6h6Zm-6-2h6v-6H5v6Z"
      />
    </>,
  ],
})
