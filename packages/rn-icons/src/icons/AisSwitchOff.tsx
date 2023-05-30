import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisSwitchOff = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="M10 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8Zm8-6h12a6 6 0 0 1 0 12H10a6 6 0 0 1 0-12Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisSwitchOff
