import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisStepHorizontal: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.918 16.997a6.002 6.002 0 0 1-11.836 0A1.022 1.022 0 0 1 10 17H3a1 1 0 1 1 0-2h7c.028 0 .055.001.082.003a6.002 6.002 0 0 1 11.836 0c.027-.002.054-.003.082-.003h7a1 1 0 1 1 0 2h-7c-.028 0-.055-.001-.082-.003ZM16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </ReactSVG.G>,
  ],
})
