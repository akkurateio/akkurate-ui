import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisInside = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16.655 2.244a1 1 0 0 0-1.31 0l-12 10.4A1 1 0 0 0 3 13.4V29a1 1 0 1 0 2 0V13.857l11-9.534 11 9.534V29a1 1 0 1 0 2 0V13.4a1 1 0 0 0-.345-.756l-12-10.4Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M10 27a6 6 0 0 1 12 0v2a1 1 0 1 1-2 0v-2a4 4 0 0 0-8 0v2a1 1 0 1 1-2 0v-2Z"
    />
  </Svg>
)
export default AisInside
