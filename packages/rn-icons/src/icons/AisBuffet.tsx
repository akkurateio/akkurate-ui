import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBuffet: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.646 13A3.99 3.99 0 0 0 18 10V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7a3.99 3.99 0 0 0 1.354 3A3.99 3.99 0 0 0 10 16v2H8v-4a2 2 0 0 0-1-1.732V9H5v3.268A2 2 0 0 0 4 14v4a2 2 0 0 0-2 2v8h2v1a1 1 0 1 0 2 0v-1h20v1a1 1 0 1 0 2 0v-1h2v-8a2 2 0 0 0-2-2 2 2 0 0 0 2-2v-4H20v4a2 2 0 0 0 2 2h-4v-2a3.99 3.99 0 0 0-1.354-3ZM12 8V4h4v4h-4Zm0 2a2 2 0 1 0 4 0h-4Zm2 4a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2ZM4 26v-6h24v6H4Zm24-10h-6v-2h6v2Z"
      />
      <ReactSVG.Path d="M23 6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1ZM26 5a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V5Z" />
    </ReactSVG.G>,
  ],
})
