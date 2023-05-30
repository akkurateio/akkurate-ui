import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisHr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M29 19H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM4 17h24v-2H4v2Z"
    />
  </Svg>
)
export default AisHr
