import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisGoUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M14.658 10.582a2 2 0 0 1 3.354 0l4.11 6.329c.864 1.33-.09 3.089-1.677 3.089h-8.22c-1.587 0-2.542-1.759-1.678-3.09l4.11-6.328Z" />
    </ReactSVG.G>,
  ],
})
