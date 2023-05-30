import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisHeadline = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M22 5a1 1 0 0 0-1 1v9H9V6a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0v-9h12v9a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z"
    />
  </Svg>
)
export default AisHeadline
