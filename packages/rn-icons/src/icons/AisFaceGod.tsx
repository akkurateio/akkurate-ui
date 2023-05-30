import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
export const AisFaceGod = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
      clipRule="evenodd"
    />
    <Rect width={5} height={1} x={8.5} y={13.5} stroke="#000" rx={0.5} />
    <Rect width={5} height={1} x={18.5} y={13.5} stroke="#000" rx={0.5} />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M23.907 17c1.183 0 2.123 1.034 1.75 2.156C24.338 23.132 20.594 26 16.181 26c-4.412 0-8.156-2.868-9.476-6.844C6.333 18.034 7.273 17 8.455 17h15.452Z"
      clipRule="evenodd"
    />
  </Svg>
)
