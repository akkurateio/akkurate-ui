import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisDownToBottom = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M15.293 18.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 1 0-1.414-1.414L16 16.586 7.707 8.293a.999.999 0 1 0-1.414 1.414l9 9ZM27 23H5a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z"
    />
  </Svg>
)
