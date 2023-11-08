import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisHelpFilled: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm-1-13a1 1 0 0 1 1.132-.991c.045-.012.09-.02.136-.027a2.003 2.003 0 0 0 1.731-1.93 2 2 0 0 0-3.655-1.173c-.207.305-.564.526-.92.43-.711-.19-1.15-.942-.736-1.551a4.56 4.56 0 0 1 .126-.176 3.994 3.994 0 0 1 2.602-1.54A4 4 0 0 1 17 16.874V18a1 1 0 1 1-2 0v-2Zm1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </ReactSVG.G>,
  ],
})
