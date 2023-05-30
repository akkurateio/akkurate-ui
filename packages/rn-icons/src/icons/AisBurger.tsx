import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisBurger = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M7 8h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM25 12H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 18H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM25 24H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
    />
  </Svg>
)
export default AisBurger
