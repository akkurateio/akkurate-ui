import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisFileSlide = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="m15 19 2-2-2-2v4Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M22 14a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6Zm-10 0h8v6h-8v-6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8 2h12.414L26 7.586V28c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2Zm15.586 6L20 4.414V8h3.586ZM8 4v24h16V10h-6V4H8Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisFileSlide
