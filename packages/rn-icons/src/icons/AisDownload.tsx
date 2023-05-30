import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisDownload = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M21.293 18.293 17 22.586V11a1 1 0 1 0-2 0v11.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414l5.999 5.999a.99.99 0 0 0 .326.217.991.991 0 0 0 1.09-.217l5.999-5.999a.999.999 0 1 0-1.414-1.414ZM23 6H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z"
    />
  </Svg>
)
export default AisDownload
