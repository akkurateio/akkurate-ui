import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSlack: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M7.314 19.952a3.147 3.147 0 1 1-3.147-3.147h3.147v3.147Zm1.586 0a3.147 3.147 0 0 1 6.295 0v7.88a3.147 3.147 0 1 1-6.295 0v-7.88Zm3.148-12.638a3.147 3.147 0 1 1 3.147-3.147v3.147h-3.147Zm0 1.586a3.147 3.147 0 0 1 0 6.295h-7.88a3.147 3.147 0 1 1 0-6.295h7.88Zm12.638 3.148a3.148 3.148 0 1 1 3.147 3.147h-3.147v-3.147Zm-1.586 0a3.147 3.147 0 0 1-6.295 0v-7.88a3.147 3.147 0 1 1 6.295 0v7.88Zm-3.148 12.638a3.148 3.148 0 1 1-3.147 3.147v-3.147h3.147Zm0-1.586a3.147 3.147 0 0 1 0-6.295h7.88a3.147 3.147 0 1 1 0 6.295h-7.88Z" />
    </ReactSVG.G>,
  ],
})
