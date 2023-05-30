import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisIssues = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M20.68 10.73a1 1 0 1 0-1.36-1.46l-4.65 4.36-1.99-1.86a1 1 0 1 0-1.36 1.46l2.66 2.5a1 1 0 0 0 1.37 0l5.33-5Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 6c0-1.1.9-2 2-2h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 0h24v13H4V6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M26 23H6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM11 27h10a2 2 0 0 1-2 2h-6c-1.1 0-2-.9-2-2Z"
    />
  </Svg>
)
export default AisIssues
