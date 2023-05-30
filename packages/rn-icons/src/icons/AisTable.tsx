import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisTable = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M28 4H4a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM13 18v-6h6v6h-6Zm6 2v6h-6v-6h6ZM5 12h6v6H5v-6Zm16 0h6v6h-6v-6Zm6-6v4H5V6h22ZM5 20h6v6H5v-6Zm16 6v-6h6v6h-6Z"
    />
  </Svg>
)
