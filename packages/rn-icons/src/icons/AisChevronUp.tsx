import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisChevronUp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M27 22a.997.997 0 0 1-.707-.293L16 11.414 5.707 21.707a.999.999 0 1 1-1.414-1.414l11-11a.999.999 0 0 1 1.414 0l11 11A.999.999 0 0 1 27 22Z"
    />
  </Svg>
)
export default AisChevronUp
