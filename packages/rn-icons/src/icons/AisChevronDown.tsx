import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisChevronDown = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 23a.997.997 0 0 1-.707-.293l-11-11a.999.999 0 1 1 1.414-1.414L16 20.586l10.293-10.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 16 23Z"
    />
  </Svg>
)
