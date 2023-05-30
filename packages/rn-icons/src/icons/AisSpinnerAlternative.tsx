import * as React from "react"
import Svg, { G, Path, SvgProps } from "react-native-svg"
const AisSpinnerAlternative = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <G fill="#000" opacity={0.85}>
      <Path d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM27 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23.778 25.778a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.222 10.222a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </G>
  </Svg>
)
export default AisSpinnerAlternative
