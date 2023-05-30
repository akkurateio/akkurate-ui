import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisFileMarkdown = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M8 20v-8h2.065l2.064 2.941L14.194 12h2.064v8h-2.064v-4.588l-2.065 2.94-2.064-2.94V20H8Zm12.903 0-3.096-3.882h2.064V12h2.065v4.118H24L20.903 20Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M20.414 2H8c-1.103 0-2 .897-2 2v6h2V4h10v6h8V7.586L20.414 2ZM20 4.414 23.586 8H20V4.414Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M24 22h2v6c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2v-6h2v6h16v-6Z"
    />
  </Svg>
)
