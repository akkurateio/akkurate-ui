import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisGraphPie = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3Zm10.949 12H17V5.051c5.268.478 9.472 4.681 9.949 9.949ZM5 16C5 10.272 9.402 5.558 15 5.051V16a1.01 1.01 0 0 0 .293.707l7.741 7.741A10.944 10.944 0 0 1 16 27C9.935 27 5 22.065 5 16Zm19.448 7.034L18.414 17h8.535a10.954 10.954 0 0 1-2.501 6.034Z"
    />
  </Svg>
)
export default AisGraphPie
