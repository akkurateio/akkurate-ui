import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisMaximaze = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M18 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-3.293 3.293a1 1 0 0 1-1.414-1.414L20.586 10H19a1 1 0 0 1-1-1ZM14 23a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.293-3.293a1 1 0 0 1 1.414 1.414L11.414 22H13a1 1 0 0 1 1 1Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm4-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
