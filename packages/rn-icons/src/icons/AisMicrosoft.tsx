import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMicrosoft: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M15.381 3H3v12.381h12.381V3ZM29 3H16.619v12.381H29V3ZM3 16.619h12.381V29H3V16.619ZM29 16.619H16.619V29H29V16.619Z" />
    </>,
  ],
})
