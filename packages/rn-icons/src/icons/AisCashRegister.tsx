import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCashRegister: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v2h10v-4h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4v-2Zm-1-2V6h10v8H6Zm3 2v2h4v-2H9Zm15-6v2h4v-2h-4ZM4 26v-2h4a1 1 0 1 0 0-2H4v-2h24v6H4Z"
      />
    </ReactSVG.G>,
  ],
})
