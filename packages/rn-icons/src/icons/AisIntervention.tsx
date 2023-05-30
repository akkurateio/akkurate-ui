import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisIntervention = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M9 9a1 1 0 0 0 1-1V7h6v1a1 1 0 0 0 2 0V7h2v3a1 1 0 0 0 2 0V7c0-1.103-.897-2-2-2h-2V4a1 1 0 0 0-2 0v1h-6V4a1 1 0 0 0-2 0v1H6c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h3a1 1 0 1 0 0-2H6V7h2v1a1 1 0 0 0 1 1Z" />
      <ReactSVG.Path d="M20 13c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8Zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6Z" />
      <ReactSVG.Path d="M21 20.586V18a1 1 0 1 0-2 0v3.414l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21 20.586Z" />
    </>,
  ],
})
