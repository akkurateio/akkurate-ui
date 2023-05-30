import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisChevronSort = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M21.293 20.293 16 25.586l-5.293-5.293a.999.999 0 1 0-1.414 1.414l6 6a.997.997 0 0 0 1.414 0l6-6a.999.999 0 1 0-1.414-1.414ZM10.707 11.707 16 6.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6-6a.999.999 0 0 0-1.414 0l-6 6a.999.999 0 1 0 1.414 1.414Z"
    />
  </Svg>
)
