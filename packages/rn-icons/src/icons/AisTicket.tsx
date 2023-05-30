import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisTicket = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="M20 13h2v6h-2v-6Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 21v-3a2 2 0 1 1 0-4v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3a2 2 0 1 1 0 4v3a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4ZM20 9H6a2 2 0 0 0-2 2v1.535c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465V21a2 2 0 0 0 2 2h14v-2h2v2h4a2 2 0 0 0 2-2v-1.535A3.998 3.998 0 0 1 26 16c0-1.48.804-2.773 2-3.465V11a2 2 0 0 0-2-2h-4v2h-2V9Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisTicket
