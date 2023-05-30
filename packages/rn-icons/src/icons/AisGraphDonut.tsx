import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisGraphDonut = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3Zm6.93 14a6.964 6.964 0 0 1-1.324 3.192l2.842 2.842A10.954 10.954 0 0 0 26.949 17h-4.02Zm-2.738 4.606A7 7 0 1 1 15 9.071V5.05C9.402 5.558 5 10.272 5 16c0 6.065 4.935 11 11 11 2.674 0 5.126-.96 7.034-2.552l-2.842-2.842ZM17 9.071V5.05c5.268.478 9.472 4.681 9.949 9.949h-4.02A7.004 7.004 0 0 0 17 9.07ZM21 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisGraphDonut
