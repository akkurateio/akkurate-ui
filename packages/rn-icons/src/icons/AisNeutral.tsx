import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisNeutral = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M2 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM8 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM15 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM20 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM27 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
    />
  </Svg>
)
export default AisNeutral
