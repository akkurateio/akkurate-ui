import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisStepVertical: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3a1 1 0 1 1 2 0v7c0 .028-.001.055-.003.082a6.002 6.002 0 0 1 0 11.836c.002.027.003.054.003.082v7a1 1 0 1 1-2 0v-7c0-.028.001-.055.003-.082a6.002 6.002 0 0 1 0-11.836A1.022 1.022 0 0 1 15 10V3Zm-3 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      />
    </ReactSVG.G>,
  ],
})
