import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisGraphBarAlternative = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M21 26V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v20h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8h2V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12h2Zm2-20h2v20h-2V6Zm-6 8h-2v12h2V14ZM7 18h2v8H7v-8Z"
      clipRule="evenodd"
    />
  </Svg>
)
