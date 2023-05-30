import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisDislike = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 5V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.191a6.238 6.238 0 0 1 3 5.331V28a1 1 0 0 0 1 1h1a4 4 0 0 0 4-4v-4a1 1 0 0 1 1-1h2a4 4 0 0 0 4-4v-5a6 6 0 0 0-6-6H12ZM6 5v12h4V5H6Zm6 2v8.566a8.237 8.237 0 0 1 5 7.574V27a2 2 0 0 0 2-2v-4a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2v-5a4 4 0 0 0-4-4H12Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisDislike
