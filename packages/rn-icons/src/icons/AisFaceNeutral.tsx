import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
export const AisFaceNeutral = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      clipRule="evenodd"
    />
    <Rect width={10} height={2} x={11} y={20} fill="#000" rx={1} />
  </Svg>
)
