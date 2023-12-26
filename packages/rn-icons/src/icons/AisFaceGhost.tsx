import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFaceGhost: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Circle cx="11" cy="13" r="2" />
      <ReactSVG.Circle cx="21" cy="13" r="2" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.671 24.505a2 2 0 0 1 2.578-.067l1.751 1.4V16c0-6.627-5.373-12-12-12S4 9.373 4 16v9.839l1.75-1.4a2 2 0 0 1 2.579.066l3.171 2.82 3.171-2.82a2 2 0 0 1 2.658 0l3.171 2.82 3.171-2.82ZM25 26l3.375 2.7A1 1 0 0 0 30 27.92V16c0-7.732-6.268-14-14-14S2 8.268 2 16v11.92a1 1 0 0 0 1.625.78L7 26l3.836 3.41a1 1 0 0 0 1.328 0L16 26l3.836 3.41a1 1 0 0 0 1.328 0L25 26Z"
      />
    </ReactSVG.G>,
  ],
})
