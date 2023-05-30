import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisCheckboxIntermediate = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm14 11H10v2h12v-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisCheckboxIntermediate
