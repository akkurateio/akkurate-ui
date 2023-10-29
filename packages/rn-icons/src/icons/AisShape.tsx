import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisShape: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.134 2.5a1 1 0 0 1 1.732 0l4.415 7.647A10.06 10.06 0 0 1 20 10c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.355 0-9.727-4.21-9.988-9.5H3.474a1 1 0 0 1-.866-1.5l9.526-16.5Zm-6.928 16L13 5l7.794 13.5H5.206Zm6.81 2a8 8 0 1 0 7.35-8.475L23.391 19a1 1 0 0 1-.866 1.5h-10.51Z"
      />
    </ReactSVG.G>,
  ],
})
