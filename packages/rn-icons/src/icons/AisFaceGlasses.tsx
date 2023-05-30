import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
export const AisFaceGlasses = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      clipRule="evenodd"
    />
    <Rect
      width={7}
      height={7}
      x={7}
      y={11}
      stroke="#000"
      strokeWidth={2}
      rx={3}
    />
    <Rect
      width={7}
      height={7}
      x={18}
      y={11}
      stroke="#000"
      strokeWidth={2}
      rx={3}
    />
    <Rect width={10} height={2} x={11} y={22} fill="#000" rx={1} />
    <Path fill="#000" d="M3 12h4v2H3zM14 12h4v2h-4zM25 12h4v2h-4z" />
  </Svg>
)
