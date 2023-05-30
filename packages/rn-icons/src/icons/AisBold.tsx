import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBold: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M18.25 25H9V7h8.5a5.25 5.25 0 0 1 4 8.65A5.25 5.25 0 0 1 18.25 25ZM12 22h6.23a2.249 2.249 0 1 0 0-4.5H12V22Zm0-7.5h5.5a2.249 2.249 0 1 0 0-4.5H12v4.5Z" />
    </ReactSVG.G>,
  ],
})
