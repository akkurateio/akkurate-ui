import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisForward = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M20.707 2.293a1 1 0 1 0-1.414 1.414L24.586 9H14.5C8.701 9 4 13.701 4 19.5S8.701 30 14.5 30h11c.128 0 .256-.002.383-.007A1 1 0 1 0 26 28v-.015a8.63 8.63 0 0 1-.5.015h-11a8.5 8.5 0 0 1 0-17h10.086l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7Z"
    />
  </Svg>
)
export default AisForward
