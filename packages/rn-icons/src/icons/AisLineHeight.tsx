import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisLineHeight: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M2 5a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 27a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 22.13h1.54l1.22-3.435h4.905l1.22 3.436h1.54L12.97 10h-1.517L7 22.13Zm7.203-4.738L12.26 11.92h-.095l-1.943 5.473h3.98Z"
      />
      <ReactSVG.Path d="M18.864 21.065v1.066h7.132v-1.303h-5.189v-.095l5.023-6.587v-1.113h-6.8v1.303h5v.095l-5.166 6.634Z" />
    </ReactSVG.G>,
  ],
})
