import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisEnterpriseAlternative: FunctionComponent<IIconProps> =
  createIcon({
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path d="M6 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z" />
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.293 2.293a1 1 0 0 1 1.414 0l8 8A1 1 0 0 1 20 11v3h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11a1 1 0 0 1 .293-.707l8-8ZM12 28v-6h-2v6h2Zm2 0v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4V11.414l7-7 7 7V28h-4Zm14 0h-8V16h8v12Z"
        />
      </ReactSVG.G>,
    ],
  })
