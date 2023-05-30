import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisFlag = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7 3a1 1 0 0 0-2 0v26a1 1 0 1 0 2 0v-9h19a1 1 0 0 0 .733-1.68L20.865 12l5.868-6.32A1 1 0 0 0 26 4H7V3Zm0 3v12h16.707l-4.94-5.32a1 1 0 0 1 0-1.36L23.707 6H7Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisFlag
