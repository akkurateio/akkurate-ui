import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisCar = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="m29.97 19.754-.66-2.638a3.01 3.01 0 0 0-2.599-2.257l-3.876-.407a1.009 1.009 0 0 0-.281-.283l-3.985-2.657a8.962 8.962 0 0 0-4.991-1.511H6.999c-.334 0-.646.167-.832.445l-1.758 2.637-.289-.017a2.027 2.027 0 0 0-1.492.542 2.014 2.014 0 0 0-.629 1.457v4.32c0 .761.423 1.445 1.104 1.786l.974.487a3.001 3.001 0 0 0 2.922 2.343 2.996 2.996 0 0 0 2.816-2h11.184c.062 0 .115-.024.173-.035a2.995 2.995 0 0 0 2.827 2.035 2.996 2.996 0 0 0 2.816-2h1.181a2.006 2.006 0 0 0 2.003-2.003.992.992 0 0 0-.03-.243l.001-.001ZM7.535 12h6.043a6.97 6.97 0 0 1 3.881 1.175l1.266.844-1.776-.187L6.72 13.22l.814-1.221.001.001ZM7 22c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1Zm17 0c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1Zm2.816-2A2.996 2.996 0 0 0 24 18a2.996 2.996 0 0 0-2.827 2.035C21.115 20.024 21.061 20 21 20H9.816A2.996 2.996 0 0 0 7 18a2.99 2.99 0 0 0-2.622 1.573L4 19.385l.002-4.323 12.783.764 9.717 1.023c.417.044.766.347.867.753L27.97 20h-1.154Z"
    />
  </Svg>
)
