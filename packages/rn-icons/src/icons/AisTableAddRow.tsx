import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisTableAddRow: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm24 2H4v4h24V5ZM4 21a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4Zm24 6v-4H4v4h24Z"
      />
      <ReactSVG.Path d="M13 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM26 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2.293 18.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L4.586 16l-2.293 2.293Z" />
    </>,
  ],
})
