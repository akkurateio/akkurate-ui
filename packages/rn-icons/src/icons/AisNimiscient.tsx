import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisNimiscient = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="m22.53 2-1.6 4.82-8.81 3.15-1.26-3.8L22.53 2Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7 21a9 9 0 1 1 18.001.001A9 9 0 0 1 7 21Zm4 0c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisNimiscient
