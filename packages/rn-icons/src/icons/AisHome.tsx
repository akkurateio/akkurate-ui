import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisHome = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="m27.633 14.226-11-9a.998.998 0 0 0-1.266 0l-11 9a1 1 0 1 0 1.265 1.548l.367-.3V24c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8.526l.367.3a.998.998 0 0 0 1.407-.141 1 1 0 0 0-.142-1.407h.002ZM14 25v-6h4v6h-4Zm10-1c0 .551-.448 1-1 1h-3v-6.339c0-.916-.745-1.661-1.66-1.661h-4.68c-.915 0-1.66.745-1.66 1.661V25H9c-.552 0-1-.449-1-1V13.837l8-6.545 8 6.545V24Z"
    />
  </Svg>
)
export default AisHome
