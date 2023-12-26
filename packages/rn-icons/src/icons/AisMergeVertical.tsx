import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMergeVertical: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M15 26.586v-5.758a1 1 0 0 0-.293-.707L7.88 13.293A3 3 0 0 1 7 11.172V3a1 1 0 0 1 2 0v8.172a1 1 0 0 0 .293.707L16 18.586l6.707-6.707a1 1 0 0 0 .293-.707V3a1 1 0 1 1 2 0v8.172a3 3 0 0 1-.879 2.12l-6.828 6.83a1 1 0 0 0-.293.706v5.758l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L15 26.586Z" />
    </ReactSVG.G>,
  ],
})
