import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisCloudy: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M17 3.005a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2ZM23.657 6.934a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.743 18.692a5.998 5.998 0 1 0-9.676-5.531A7.556 7.556 0 0 0 6.35 18.25 5.993 5.993 0 0 0 8 30.005h11a5.986 5.986 0 0 0 2.743-11.313ZM18 10.005a4.004 4.004 0 0 1 4 4 3.961 3.961 0 0 1-1.74 3.291 7.541 7.541 0 0 0-6.134-4.24A3.998 3.998 0 0 1 18 10.006Zm1 18H8a3.993 3.993 0 0 1-.673-7.93l.663-.112.146-.656a5.496 5.496 0 0 1 10.729 0l.146.656.662.112a3.993 3.993 0 0 1-.673 7.93Z"
      />
      <ReactSVG.Path d="M26 14.005a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM9.515 5.52a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 1 0 1.415-1.414L10.928 5.52a1 1 0 0 0-1.414 0Z" />
    </ReactSVG.G>,
  ],
})
