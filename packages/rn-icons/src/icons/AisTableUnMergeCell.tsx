import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisTableUnMergeCell: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M3 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H4V5h6a1 1 0 1 0 0-2H3Z" />
      <ReactSVG.Path d="M10.707 12.293a1 1 0 0 1 0 1.414L9.414 15H12a1 1 0 1 1 0 2H9.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0ZM21.293 19.707a1 1 0 0 1 0-1.414L22.586 17H20a1 1 0 1 1 0-2h2.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z" />
      <ReactSVG.Path d="M21 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h6V5h-6a1 1 0 0 1-1-1ZM15 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM16 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM16 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15 28a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </>,
  ],
})
