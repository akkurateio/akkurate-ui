import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisAdd = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M25 15h-8V7a1 1 0 0 0-2 0v8H7a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2Z"
    />
  </Svg>
)
