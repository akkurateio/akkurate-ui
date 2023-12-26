import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMonumentAlternative: FunctionComponent<IIconProps> = createIcon(
  {
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3a1 1 0 1 1 2 0v1.05c5.053.501 9 4.765 9 9.95v1.514l3.42 1.578A1 1 0 0 1 29 19v9a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2v-9a1 1 0 0 1-.42-1.908L6 15.514V14c0-5.185 3.947-9.449 9-9.95V3ZM8 14.59l7.58-3.498a1 1 0 0 1 .84 0L24 14.591V14a8 8 0 1 0-16 0v.59ZM9 28H5v-9h4v9Zm6 0h-4v-9h4v9Zm6 0h-4v-9h4v9Zm6 0h-4v-9h4v9ZM16 13.101 24.447 17H7.553L16 13.101Z"
        />
      </ReactSVG.G>,
    ],
  },
)
