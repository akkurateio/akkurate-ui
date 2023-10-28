import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisAdobe: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="m18.457 29.56-2.112-5.351h-5.192l4.864-11.43 7.078 16.781h-4.637ZM12.105 3H1v26.56L12.105 3ZM31 3H19.895L31 29.56V3Z" />
    </ReactSVG.G>,
  ],
})
