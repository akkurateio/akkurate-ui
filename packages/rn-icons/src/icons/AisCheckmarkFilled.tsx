import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisCheckmarkFilled = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Zm6.715 8.715-8 8a.997.997 0 0 1-1.414 0l-4.008-4.008a.999.999 0 1 1 1.414-1.414l3.301 3.301 7.293-7.293a.999.999 0 1 1 1.414 1.414Z"
    />
  </Svg>
)
export default AisCheckmarkFilled
