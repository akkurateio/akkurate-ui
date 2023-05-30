import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisListUnordered: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM30 22H16v2h14v-2ZM30 8H16v2h14V8Z" />
    </ReactSVG.G>,
  ],
})
