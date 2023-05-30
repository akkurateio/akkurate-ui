import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisLink: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M27.3 5.454a6 6 0 0 1 1.95 1.306 6 6 0 0 1 .02 8.48l-8 8A6 6 0 0 1 17 25a6 6 0 0 1-4.25-1.73 5.999 5.999 0 0 1 0-8.5l1.42-1.42 1.41 1.42-1.41 1.42a4.006 4.006 0 1 0 5.67 5.66l8-8a4.01 4.01 0 0 0-5.67-5.67l-1.42-1.42a6 6 0 0 1 6.55-1.306Z" />
      <ReactSVG.Path d="M3.318 23.52a4 4 0 0 0 .872 1.3 4 4 0 0 0 5.67 0l1.42 1.42A6.07 6.07 0 0 1 7 28a6 6 0 0 1-4.26-1.7 6 6 0 0 1 0-8.51l8-8a6.018 6.018 0 0 1 8.51 8.51l-2.12 2.12L15.71 19l2.12-2.15A4 4 0 0 0 19 14a3.941 3.941 0 0 0-2.44-3.722 4 4 0 0 0-4.37.872l-8 8a4 4 0 0 0-.872 4.37Z" />
    </>,
  ],
})
