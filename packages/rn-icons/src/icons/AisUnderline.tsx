import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisUnderline = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M4 26h24v2H4v-2Zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 1 0 10 0V5h2v11a7 7 0 0 1-7 7Z"
    />
  </Svg>
)
export default AisUnderline
