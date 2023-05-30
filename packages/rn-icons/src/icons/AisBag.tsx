import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBag: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M23.367 10H21V7c0-2.757-2.243-5-5-5s-5 2.243-5 5v3H8.633A2.636 2.636 0 0 0 6 12.633v14.734A2.636 2.636 0 0 0 8.633 30h14.734A2.636 2.636 0 0 0 26 27.367V12.633A2.636 2.636 0 0 0 23.367 10ZM13 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6V7Zm11 20.367a.634.634 0 0 1-.633.633H8.633A.634.634 0 0 1 8 27.367V12.633c0-.349.284-.633.633-.633H11v3a1 1 0 1 0 2 0v-3h6v3a1 1 0 1 0 2 0v-3h2.367c.349 0 .633.284.633.633v14.734Z" />
    </ReactSVG.G>,
  ],
})
