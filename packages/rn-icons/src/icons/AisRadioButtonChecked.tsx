import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisRadioButtonChecked = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path fill="#000" d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-2 0c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z"
      clipRule="evenodd"
    />
  </Svg>
)