import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFileSlide: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="m15 19 2-2-2-2v4Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 14a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6Zm-10 0h8v6h-8v-6Z"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h12.414L26 7.586V28c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2Zm15.586 6L20 4.414V8h3.586ZM8 4v24h16V10h-6V4H8Z"
      />
    </>,
  ],
})
