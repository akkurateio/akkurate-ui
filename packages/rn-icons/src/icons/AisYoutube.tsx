import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisYoutube: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M30.367 9.278a3.75 3.75 0 0 0-2.646-2.646C25.385 6 16 6 16 6s-9.385 0-11.72.632a3.75 3.75 0 0 0-2.647 2.646A38.708 38.708 0 0 0 1 16.5a38.71 38.71 0 0 0 .632 7.222 3.75 3.75 0 0 0 2.646 2.646c2.336.632 11.721.632 11.721.632s9.385 0 11.72-.632a3.75 3.75 0 0 0 2.647-2.646c.436-2.383.648-4.8.632-7.222a38.71 38.71 0 0 0-.632-7.22ZM13 21v-9l7.789 4.5L13 21Z" />
    </ReactSVG.G>,
  ],
})
