import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMediaLibrary: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M21 4H11a2 2 0 0 1 2-2h6c1.1 0 2 .9 2 2ZM6 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2H6Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 30c1.1 0 2-.9 2-2V12a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24ZM4 28h24V12H4v16Z"
      />
      <ReactSVG.Path d="M19.933 19.2a1 1 0 0 1 0 1.6l-5.333 4A1 1 0 0 1 13 24v-8a1 1 0 0 1 1.6-.8l5.333 4Z" />
    </ReactSVG.G>,
  ],
})
