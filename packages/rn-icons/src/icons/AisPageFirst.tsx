import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisPageFirst = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="m18.414 16 6.293-6.293a.999.999 0 1 0-1.414-1.414l-7 7a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L18.414 16ZM8 4a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z"
    />
  </Svg>
)
export default AisPageFirst
