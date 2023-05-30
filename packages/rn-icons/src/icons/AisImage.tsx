import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
export const AisImage = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      d="M26 4H6c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2ZM6 6h20v11.587l-4.293-4.294a.999.999 0 0 0-1.414 0L7.586 26H6V6Zm4.414 20L21 15.414l5.001 5.001V26H10.414Z"
    />
    <Path
      fill="#000"
      d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Z"
    />
  </Svg>
)
