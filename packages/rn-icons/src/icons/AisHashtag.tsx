import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const AisHashtag = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.975 5.222a1 1 0 1 0-1.95-.444L10.838 10H7a1 1 0 1 0 0 2h3.384l-1.819 8H5a1 1 0 1 0 0 2h3.11l-1.085 4.778a1 1 0 1 0 1.95.444L10.162 22h8.949l-1.086 4.778a1 1 0 1 0 1.95.444L21.162 22H25a1 1 0 1 0 0-2h-3.384l1.819-8H27a1 1 0 1 0 0-2h-3.11l1.085-4.778a1 1 0 1 0-1.95-.444L21.838 10H12.89l1.086-4.778ZM19.565 20l1.819-8h-8.95l-1.818 8h8.95Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AisHashtag
