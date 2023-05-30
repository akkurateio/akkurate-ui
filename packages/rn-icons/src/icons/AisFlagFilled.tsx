import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisFlagFilled = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M7 3a1 1 0 0 0-2 0v26a1 1 0 1 0 2 0v-9h19a1 1 0 0 0 .733-1.68L20.865 12l5.868-6.32A1 1 0 0 0 26 4H7V3Z"
    />
  </Svg>
)
export default AisFlagFilled
