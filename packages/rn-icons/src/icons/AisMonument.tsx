import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMonument: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a1 1 0 0 0-1 1v3.546L7.624 13H7a1 1 0 0 0-1 1v3H3a1 1 0 1 0 0 2h1v9H3a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2h-1v-9h1a1 1 0 1 0 0-2h-3v-3a1 1 0 0 0-1-1h-.624L17 6.546V6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4Zm1 22v4h-2v-4a1 1 0 1 1 2 0Zm2 0v4h3v-9H10v9h3v-4a3 3 0 1 1 6 0Zm5-7v-2H8v2h16Zm2 11v-9h-2v9h2ZM6 28v-9h2v9H6ZM16 8.329 21.339 13H10.662L16 8.329Z"
      />
    </ReactSVG.G>,
  ],
})
