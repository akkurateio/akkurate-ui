import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMobile: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M22 2H10C8.346 2 7 3.346 7 5v22c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm1 25c0 .552-.449 1-1 1H10c-.551 0-1-.448-1-1V5c0-.552.449-1 1-1h12c.551 0 1 .448 1 1v22Z" />
      <ReactSVG.Path d="M15.8 24.02a.639.639 0 0 0-.18.061c-.06.02-.12.05-.18.09-.05.03-.1.08-.15.12-.18.189-.29.45-.29.71a.99.99 0 0 0 1 1 .994.994 0 0 0 1-1c0-.26-.11-.521-.29-.71-.24-.23-.58-.34-.91-.271Z" />
    </>,
  ],
})
