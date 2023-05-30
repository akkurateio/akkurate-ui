import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
export const AisFaceLookUp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      clipRule="evenodd"
    />
    <Rect width={5} height={1} x={13.5} y={22.5} stroke="#000" rx={0.5} />
    <Rect
      width={8}
      height={8}
      x={6}
      y={11}
      stroke="#000"
      strokeWidth={2}
      rx={4}
    />
    <Rect
      width={2}
      height={2}
      x={9}
      y={12}
      stroke="#000"
      strokeWidth={2}
      rx={1}
    />
    <Rect
      width={2}
      height={2}
      x={21}
      y={12}
      stroke="#000"
      strokeWidth={2}
      rx={1}
    />
    <Rect
      width={8}
      height={8}
      x={18}
      y={11}
      stroke="#000"
      strokeWidth={2}
      rx={4}
    />
  </Svg>
)
