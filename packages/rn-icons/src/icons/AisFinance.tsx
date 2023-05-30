import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFinance: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M29 26H3a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2ZM6 22a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2h-1V11h1a1 1 0 0 0 1-1V7a1 1 0 0 0-.804-.98l-10-2a1.039 1.039 0 0 0-.393 0l-10 2a1 1 0 0 0-.804.98v3a1 1 0 0 0 1 1h1v11h-1H6Zm12-11v11h-4V11h4Zm5 11h-3V11h3v11ZM7 7.819l9-1.8 9 1.8V9H7V7.819ZM9 11h3v11H9V11Z" />
    </ReactSVG.G>,
  ],
})
