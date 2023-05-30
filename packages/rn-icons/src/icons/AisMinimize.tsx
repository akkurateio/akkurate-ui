import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisMinimize = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M27.707 5.707a1 1 0 0 0-1.414-1.414L23 7.586V6a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586l3.293-3.293ZM5.707 27.707 9 24.414V26a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h1.586l-3.293 3.293a1 1 0 1 0 1.414 1.414Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11 15a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-2Zm4-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
