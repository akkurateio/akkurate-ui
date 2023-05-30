import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisVideo = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M20 24H6c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v2.612l4.684-1.561a1 1 0 0 1 1.317.949v8a1 1 0 0 1-1.317.949L22 19.388V22c0 1.103-.897 2-2 2ZM6 10v12.001h14V18a1 1 0 0 1 1.317-.949l4.684 1.561v-5.225l-4.684 1.561A1 1 0 0 1 20 13.999v-4H6V10Z"
    />
  </Svg>
)
