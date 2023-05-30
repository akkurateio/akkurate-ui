import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisDot = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
  </Svg>
)
