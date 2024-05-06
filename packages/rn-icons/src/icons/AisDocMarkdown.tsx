import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDocMarkdown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M28.837 25.231H3.163A2.162 2.162 0 0 1 1 23.07V8.93A2.162 2.162 0 0 1 3.163 6.77h25.674A2.163 2.163 0 0 1 31 8.93v14.135a2.16 2.16 0 0 1-1.335 2 2.162 2.162 0 0 1-.828.165ZM8.211 20.904v-5.625l2.885 3.606 2.884-3.606v5.625h2.885v-9.806H13.98l-2.884 3.606-2.885-3.607H5.325v9.81l2.886-.003ZM27.54 16h-2.886v-4.904H21.77V16h-2.885l4.326 5.049L27.54 16Z" />
    </ReactSVG.G>,
  ],
})
