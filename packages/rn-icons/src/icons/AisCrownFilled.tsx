import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCrownFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.287 19.966a1.996 1.996 0 0 1-.215-.606l-.63-3.439a2 2 0 1 1 2.516-1.513l1.03.316a4 4 0 0 0 4.23-1.244l3.403-4.031a2 2 0 1 1 2.758 0l3.402 4.031a4 4 0 0 0 4.231 1.244l1.03-.316a2 2 0 1 1 2.516 1.513l-.63 3.439c-.04.217-.113.421-.216.606.183.302.288.656.288 1.034v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2c0-.378.105-.732.287-1.034ZM6 21v2h20v-2H6Z"
      />
    </ReactSVG.G>,
  ],
})
