import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisBankTransferIn: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 22a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2h-1V10h1a1 1 0 0 0 1-1V6a1 1 0 0 0-.804-.98l-10-2a1.039 1.039 0 0 0-.393 0l-10 2a1 1 0 0 0-.804.98v3a1 1 0 0 0 1 1h1v3H9v-3h9v12H9v-3H6.999v3H6Zm17 0h-3V10h3v12ZM7 6.819l9-1.8 9 1.8V8H7V6.819Z"
      />
      <ReactSVG.Path d="M3 26a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2H3ZM12.445 12.168a1 1 0 0 1 1.387.277l2 3a1 1 0 0 1 0 1.11l-2 3a1 1 0 0 1-1.664-1.11L13.132 17H4a1 1 0 1 1 0-2h9.132l-.964-1.445a1 1 0 0 1 .277-1.387Z" />
    </ReactSVG.G>,
  ],
})
