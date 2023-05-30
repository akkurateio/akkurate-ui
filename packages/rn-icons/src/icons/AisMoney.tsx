import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMoney: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M28 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 14H5V6h22v12ZM28 22H4a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2ZM28 26H4a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2Z" />
      <ReactSVG.Path d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM24 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Z" />
    </>,
  ],
})
