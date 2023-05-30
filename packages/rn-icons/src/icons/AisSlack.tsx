import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSlack: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M9.042 19.166a2.521 2.521 0 1 1-2.52-2.521h2.52v2.521Zm1.27 0a2.521 2.521 0 0 1 5.043 0v6.313a2.522 2.522 0 1 1-5.042 0v-6.313Zm2.522-10.124a2.521 2.521 0 1 1 2.521-2.52v2.52h-2.521Zm0 1.27a2.521 2.521 0 0 1 0 5.043H6.52a2.522 2.522 0 1 1 0-5.042h6.313Zm10.124 2.522a2.52 2.52 0 1 1 2.52 2.521h-2.52v-2.521Zm-1.27 0a2.521 2.521 0 0 1-5.043 0V6.52a2.522 2.522 0 1 1 5.042 0v6.313Zm-2.522 10.124a2.521 2.521 0 1 1-2.521 2.52v-2.52h2.521Zm0-1.27a2.521 2.521 0 0 1 0-5.043h6.313a2.522 2.522 0 1 1 0 5.042h-6.313Z" />
    </ReactSVG.G>,
  ],
})
