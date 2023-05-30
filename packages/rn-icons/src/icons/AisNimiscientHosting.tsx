import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisNimiscientHosting = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="M9 3H3v2h6V3ZM3 7h6v2H3V7Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M6 23c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1ZM13 26c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1ZM23 26c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M23 7h6v2h-6V7ZM29 3h-6v2h6V3ZM13 3h2v6h-2V3ZM19 3h-2v6h2V3ZM3 11h26v2H3v-2ZM29 19H3v2h26v-2ZM3 15h26v2H3v-2Z"
    />
  </Svg>
)
