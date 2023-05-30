import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisGoRight: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M21.752 17.677a2 2 0 0 0 0-3.354l-6.328-4.11c-1.33-.865-3.09.09-3.09 1.677v8.22c0 1.587 1.76 2.542 3.09 1.678l6.328-4.11Z" />
    </>,
  ],
})
