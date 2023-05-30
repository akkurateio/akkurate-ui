import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisSwitchOn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10 8a8 8 0 1 0 0 16h12a8 8 0 1 0 0-16H10Zm12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisSwitchOn
