import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisElevatorDown: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.243 4.757A5.984 5.984 0 0 0 9 3H6a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h.515l12.242 12.243A5.984 5.984 0 0 0 23 29h3a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-.515L25 16.515V11a2.997 2.997 0 0 0-1.341-2.5 3 3 0 1 0-3.318 0 3 3 0 0 0-1.307 2.049l-5.791-5.792ZM9 5c1.025 0 2.047.39 2.828 1.172l12.243 12.242a2 2 0 0 0 1.414.586H26a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3a3.984 3.984 0 0 1-2.828-1.172L7.929 13.586A2 2 0 0 0 6.515 13H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3Zm14 6v3.515l-2-2V11a1 1 0 1 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <ReactSVG.Path d="M7.586 25H7a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L7.586 25Z" />
    </ReactSVG.G>,
  ],
})
