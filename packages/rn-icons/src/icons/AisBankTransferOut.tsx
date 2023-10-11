import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBankTransferOut: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 22a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2h-1v-3h-2v3h-3v-3h-2v3h-4V10h4v3h2v-3h3v3h2v-3h1a1 1 0 0 0 1-1V6a1 1 0 0 0-.804-.98l-10-2a1.039 1.039 0 0 0-.393 0l-10 2a1 1 0 0 0-.804.98v3a1 1 0 0 0 1 1h1v12H6ZM7 6.819l9-1.8 9 1.8V8H7V6.819ZM9 10h3v12H9V10Z"
      />
      <ReactSVG.Path d="M3 26a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2H3ZM26.445 12.168a1 1 0 0 1 1.387.277l2 3a1 1 0 0 1 0 1.11l-2 3a1 1 0 0 1-1.664-1.11L27.131 17H18a1 1 0 1 1 0-2h9.131l-.963-1.445a1 1 0 0 1 .277-1.387Z" />
    </ReactSVG.G>,
  ],
})
