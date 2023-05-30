import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisChevronRight = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M11 28a.999.999 0 0 1-.707-1.707L20.586 16 10.293 5.707a.999.999 0 1 1 1.414-1.414l11 11a.999.999 0 0 1 0 1.414l-11 11A.997.997 0 0 1 11 28Z"
    />
  </Svg>
)
