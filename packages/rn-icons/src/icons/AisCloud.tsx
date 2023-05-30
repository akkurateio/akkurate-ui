import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisCloud = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M16 7c.507 0 1.013.05 1.51.15a8 8 0 0 1 6.35 6.34l.26 1.35 1.35.24a5.5 5.5 0 0 1-1 10.92H7.5a5.5 5.5 0 0 1-1-10.92l1.34-.24.26-1.35A8 8 0 0 1 16 7Zm0-2a10 10 0 0 0-9.83 8.12A7.5 7.5 0 0 0 7.49 28h17a7.5 7.5 0 0 0 1.32-14.88A10 10 0 0 0 16 5Z"
    />
  </Svg>
)
