import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisUserCapture: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M30 7a1 1 0 0 1-1-1V3h-3a1 1 0 1 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1ZM2 25a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1ZM6 3a1 1 0 1 0 0-2H3a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0V3h3ZM25 30a1 1 0 0 1 1-1h3v-3a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 9c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6Zm-2 0c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4Z"
      />
      <ReactSVG.Path d="M7 26c0-4.963 4.037-9 9-9s9 4.037 9 9v1a1 1 0 1 1-2 0v-1c0-3.859-3.141-7-7-7s-7 3.141-7 7v1a1 1 0 1 1-2 0v-1Z" />
    </ReactSVG.G>,
  ],
})
