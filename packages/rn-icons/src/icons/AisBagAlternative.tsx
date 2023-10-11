import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBagAlternative: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a5 5 0 0 0-5 5v2H7.64a2 2 0 0 0-1.962 1.608L3.435 21.823C2.693 25.536 5.533 29 9.32 29H22.68c3.786 0 6.626-3.464 5.884-7.177L26.32 10.608A2 2 0 0 0 24.361 9H21V7a5 5 0 0 0-5-5Zm3 9v2a1 1 0 1 0 2 0v-2h3.36l2.244 11.215A4 4 0 0 1 22.68 27H9.32a4 4 0 0 1-3.923-4.785L7.64 11H11v2a1 1 0 1 0 2 0v-2h6Zm0-2V7a3 3 0 1 0-6 0v2h6Z"
      />
    </ReactSVG.G>,
  ],
})
