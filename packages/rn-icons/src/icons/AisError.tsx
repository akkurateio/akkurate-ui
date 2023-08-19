import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisError: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M15 11a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6ZM17 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.956 28a2.906 2.906 0 0 1-2.522-1.5l-5.045-9a3.088 3.088 0 0 1 0-3l5.044-9A2.908 2.908 0 0 1 10.955 4h10.09c1.036 0 2.003.575 2.521 1.5l5.045 9a3.088 3.088 0 0 1 0 3l-5.044 9a2.908 2.908 0 0 1-2.522 1.5h-10.09Zm10.867-2.479a.908.908 0 0 1-.778.479h-10.09a.907.907 0 0 1-.776-.478l-5.045-8.999a1.089 1.089 0 0 1 0-1.045l5.043-8.999A.91.91 0 0 1 10.955 6h10.09c.292 0 .602.166.776.478l5.046 9c.178.32.177.727 0 1.044l-5.044 9Z"
      />
    </ReactSVG.G>,
  ],
})
