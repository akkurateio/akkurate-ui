import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisGoFirst: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M12.91 14.436a2 2 0 0 0 0 3.355l6.329 4.11c1.33.864 3.09-.09 3.09-1.677v-8.22c0-1.587-1.76-2.542-3.09-1.678l-6.328 4.11ZM10 11a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V11Z" />
    </ReactSVG.G>,
  ],
})
