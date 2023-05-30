import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPageLast: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M9.707 8.293a.999.999 0 1 0-1.414 1.414L14.586 16l-6.293 6.293a.999.999 0 1 0 1.414 1.414l7-7a.999.999 0 0 0 0-1.414l-7-7ZM24 4a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z" />
    </>,
  ],
})
