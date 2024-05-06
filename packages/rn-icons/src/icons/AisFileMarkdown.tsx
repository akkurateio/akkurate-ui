import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFileMarkdown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M8 20v-8h2.065l2.064 2.941L14.194 12h2.064v8h-2.064v-4.588l-2.065 2.94-2.064-2.94V20H8Zm12.903 0-3.096-3.882h2.064V12h2.065v4.118H24L20.903 20Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3h2v5h5v2h-7V3Z"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4h11.172L24 8.828V10h2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 19.172 2H8a2 2 0 0 0-2 2v6h2V4Zm0 18H6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-2v6H8v-6Z"
      />
    </ReactSVG.G>,
  ],
})
