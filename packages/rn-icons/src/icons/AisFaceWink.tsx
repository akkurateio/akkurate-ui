import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
const AisFaceWink = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      clipRule="evenodd"
    />
    <Rect width={7} height={1} x={17.5} y={12.5} stroke="#000" rx={0.5} />
    <Rect
      width={2}
      height={2}
      x={10}
      y={12}
      stroke="#000"
      strokeWidth={2}
      rx={1}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.707 20.243a6 6 0 0 0 8.485 0 1 1 0 0 1 1.415 1.414 8 8 0 0 1-11.314 0 1 1 0 1 1 1.414-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisFaceWink
