import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisCode = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="m17.64 6-5.22 19.483 1.931.518 5.22-19.483-1.931-.517ZM24 23l7-7-7-7-1.41 1.41L28.17 16l-5.58 5.59L24 23ZM8 9l-7 7 7 7 1.41-1.41L3.83 16l5.58-5.59L8 9Z"
    />
  </Svg>
)
export default AisCode
