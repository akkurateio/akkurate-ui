import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisDashboard = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0h12v12H4V4ZM8 22a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Zm2 0h6v6h-6v-6ZM22 20a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 2h-2v2h2v-2ZM20 10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Zm2 0h6v6h-6v-6Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisDashboard
