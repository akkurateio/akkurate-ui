import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisArchive = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M23 2H9C7.346 2 6 3.346 6 5v22c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm1 25c0 .551-.449 1-1 1H9c-.551 0-1-.449-1-1V16h16v11Zm0-13H8v-4h16v4Zm0-6H8V5c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v3Z"
    />
    <Path fill="#000" d="M14 20h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z" />
  </Svg>
)
