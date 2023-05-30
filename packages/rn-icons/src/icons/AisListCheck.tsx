import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisListCheck = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 8h14v2H16V8ZM6 10.59 3.41 8 2 9.41l4 4 8-8L12.59 4 6 10.59ZM16 22h14v2H16v-2ZM6 24.59 3.41 22 2 23.41l4 4 8-8L12.59 18 6 24.59Z"
    />
  </Svg>
)
export default AisListCheck
