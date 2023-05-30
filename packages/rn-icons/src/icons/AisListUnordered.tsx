import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisListUnordered = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM30 22H16v2h14v-2ZM30 8H16v2h14V8Z"
    />
  </Svg>
)
export default AisListUnordered
