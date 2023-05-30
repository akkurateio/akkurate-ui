import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMoreVertical: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>,
  ],
})
