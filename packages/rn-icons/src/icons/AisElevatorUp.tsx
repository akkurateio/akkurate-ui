import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisElevatorUp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.757 4.757A5.984 5.984 0 0 1 23 3h3a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5h-.515L13.243 27.243A5.984 5.984 0 0 1 9 29H6a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h.515L7 16.515V11c0-1.043.533-1.963 1.341-2.5a3 3 0 1 1 3.318 0 3 3 0 0 1 1.307 2.049l5.791-5.792ZM23 5c-1.025 0-2.047.39-2.828 1.172L7.929 18.414A2 2 0 0 1 6.515 19H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3c1.025 0 2.047-.39 2.828-1.172l12.243-12.242A2 2 0 0 1 25.485 13H26a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3Zm-12 6v1.515l-2 2V11a1 1 0 1 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <ReactSVG.Path d="M27 22.414V23a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L27 22.414Z" />
    </ReactSVG.G>,
  ],
})
