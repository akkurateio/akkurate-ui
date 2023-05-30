import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisCaret = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 20a.997.997 0 0 1-.707-.293l-6-6a.999.999 0 1 1 1.414-1.414L16 17.586l5.293-5.293a.999.999 0 1 1 1.414 1.414l-6 6A.997.997 0 0 1 16 20Z"
    />
  </Svg>
)
