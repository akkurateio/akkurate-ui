import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisArrowRightUp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M23 8h-9a1 1 0 1 0 0 2h6.586L7.293 23.293a.999.999 0 1 0 1.414 1.414L22 11.414V18a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"
    />
  </Svg>
)
export default AisArrowRightUp
