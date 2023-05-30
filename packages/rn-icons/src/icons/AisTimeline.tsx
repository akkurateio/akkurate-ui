import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisTimeline = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 11c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h12ZM4 7h12v2H4V7ZM13 21H6c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2Zm-7 4v-2h7v2H6ZM28 13H8c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM8 17v-2h20v2H8Z"
    />
  </Svg>
)
export default AisTimeline
