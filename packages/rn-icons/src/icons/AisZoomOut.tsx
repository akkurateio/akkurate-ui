import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisZoomOut = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm0 22c-5.514 0-10-4.486-10-10S10.486 6 16 6s10 4.486 10 10-4.486 10-10 10Z"
    />
    <Path fill="#000" d="M21 15H11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Z" />
  </Svg>
)
