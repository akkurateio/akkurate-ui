import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCalendar: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M24.186 6H23V5a1 1 0 0 0-2 0v1H11V5a1 1 0 0 0-2 0v1H7.814A2.817 2.817 0 0 0 5 8.814v16.371a2.817 2.817 0 0 0 2.814 2.814h16.371a2.817 2.817 0 0 0 2.814-2.814V8.814A2.817 2.817 0 0 0 24.185 6h.001ZM25 25.186a.815.815 0 0 1-.814.814H7.815a.815.815 0 0 1-.814-.814V8.815c0-.449.365-.814.814-.814h1.186v1a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1h1.186c.449 0 .814.365.814.814v16.371H25Z" />
      <ReactSVG.Path d="M18 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2ZM10 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM22 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </>,
  ],
})
