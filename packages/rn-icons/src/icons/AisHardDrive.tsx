import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisHardDrive: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M23 2H9C7.346 2 6 3.346 6 5v22c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm1 25c0 .551-.448 1-1 1H9c-.552 0-1-.449-1-1V5c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v22Z" />
      <ReactSVG.Path d="M16 6c-3.309 0-6 2.691-6 6s2.691 6 6 6a1 1 0 1 0 0-2c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4a1 1 0 1 0 2 0c0-3.309-2.691-6-6-6Z" />
      <ReactSVG.Path d="M19.707 14.293a.999.999 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2-2ZM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </ReactSVG.G>,
  ],
})
