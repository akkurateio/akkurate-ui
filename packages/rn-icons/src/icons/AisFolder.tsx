import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisFolder = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M27 27H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h7.414l2 2H27c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3ZM5 7c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h22c.552 0 1-.449 1-1V10c0-.551-.448-1-1-1H13.586l-2-2H5Z"
    />
  </Svg>
)
