import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisAlignCenter = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4 5a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2H4Zm3 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H7Zm1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-3 3a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H5Zm-2 5a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm8 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Z"
      clipRule="evenodd"
    />
  </Svg>
)
