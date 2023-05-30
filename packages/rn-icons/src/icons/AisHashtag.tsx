import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisHashtag: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.975 5.222a1 1 0 1 0-1.95-.444L10.838 10H7a1 1 0 1 0 0 2h3.384l-1.819 8H5a1 1 0 1 0 0 2h3.11l-1.085 4.778a1 1 0 1 0 1.95.444L10.162 22h8.949l-1.086 4.778a1 1 0 1 0 1.95.444L21.162 22H25a1 1 0 1 0 0-2h-3.384l1.819-8H27a1 1 0 1 0 0-2h-3.11l1.085-4.778a1 1 0 1 0-1.95-.444L21.838 10H12.89l1.086-4.778ZM19.565 20l1.819-8h-8.95l-1.818 8h8.95Z"
      />
    </>,
  ],
})
