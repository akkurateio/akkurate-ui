import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSignal: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M6 4a1 1 0 0 0 0 2c11.046 0 20 8.954 20 20a1 1 0 1 0 2 0C28 13.85 18.15 4 6 4Z" />
      <ReactSVG.Path d="M5 11a1 1 0 0 1 1-1c8.837 0 16 7.163 16 16a1 1 0 1 1-2 0c0-7.732-6.268-14-14-14a1 1 0 0 1-1-1Z" />
      <ReactSVG.Path d="M6 16a1 1 0 1 0 0 2 8 8 0 0 1 8 8 1 1 0 1 0 2 0c0-5.523-4.477-10-10-10ZM7 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </ReactSVG.G>,
  ],
})
