import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisFileDoc = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M20.414 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.586L20.414 2ZM20 4.414 23.586 8H20V4.414ZM8 28V4h10v6h6v18H8Z"
    />
    <Path
      fill="#000"
      d="M10 12h12v2H10v-2ZM10 16h12v2H10v-2ZM10 20h6v2h-6v-2Z"
    />
  </Svg>
)
export default AisFileDoc
