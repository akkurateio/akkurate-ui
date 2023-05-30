import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisIssues = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M20.68 10.73a1 1 0 1 0-1.36-1.46l-4.65 4.36-1.99-1.86a1 1 0 1 0-1.36 1.46l2.66 2.5a1 1 0 0 0 1.37 0l5.33-5Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6c0-1.1.9-2 2-2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 0h24v13H4V6Z"
      />
      <ReactSVG.Path d="M26 23H6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM11 27h10a2 2 0 0 1-2 2h-6c-1.1 0-2-.9-2-2Z" />
    </>,
  ],
})
