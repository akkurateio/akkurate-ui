import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisListCheck: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 8h14v2H16V8ZM6 10.59 3.41 8 2 9.41l4 4 8-8L12.59 4 6 10.59ZM16 22h14v2H16v-2ZM6 24.59 3.41 22 2 23.41l4 4 8-8L12.59 18 6 24.59Z" />
    </>,
  ],
})
