import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisIdea = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M21.657 6.343a8 8 0 0 0-11.314 11.314l.032.032 1.393 1.67-1.536 1.281-1.336-1.602C5.024 15.13 5.035 8.823 8.93 4.928c3.905-3.904 10.237-3.904 14.142 0 3.894 3.895 3.905 10.202.033 14.11l-1.336 1.602-1.536-1.28 1.393-1.671.032-.032a8 8 0 0 0 0-11.314ZM10 25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1ZM12 29a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M21 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM11 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)