import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisFolders = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M22 11h-7.586l-2-2H5c-1.654 0-3 1.346-3 3v13c0 1.654 1.346 3 3 3h17c1.654 0 3-1.346 3-3V14c0-1.654-1.346-3-3-3Zm1 14c0 .551-.449 1-1 1H5c-.551 0-1-.449-1-1V12c0-.551.449-1 1-1h6.586l2 2H22c.551 0 1 .449 1 1v11Z"
    />
    <Path
      fill="#000"
      d="M27 6h-8.586l-2-2H9C7.346 4 6 5.346 6 7h2c0-.551.449-1 1-1h6.586l2 2H27c.551 0 1 .449 1 1v10c0 .551-.449 1-1 1v2c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3Z"
    />
  </Svg>
)
