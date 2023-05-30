import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisUser: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M16 15c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6Zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4ZM16 17c-4.963 0-9 4.037-9 9v2a1 1 0 1 0 2 0v-2c0-3.859 3.141-7 7-7s7 3.141 7 7v2a1 1 0 1 0 2 0v-2c0-4.963-4.037-9-9-9Z" />
    </>,
  ],
})
