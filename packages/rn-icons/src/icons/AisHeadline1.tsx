import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisHeadline1: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M3 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0v-9h10v9a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v9H4V6a1 1 0 0 0-1-1ZM26.191 13.454a1 1 0 0 0-1-1h-.84a1 1 0 0 0-.547.163l-2.981 1.95a.88.88 0 0 0 .962 1.473l2.103-1.373a.066.066 0 0 1 .102.055V26a1 1 0 0 0 1 1h.201a1 1 0 0 0 1-1V13.454Z" />
    </ReactSVG.G>,
  ],
})
