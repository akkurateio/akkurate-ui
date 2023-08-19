import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisJoinLeft: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M14.002 7.513a9 9 0 1 0 0 16.974A10.978 10.978 0 0 1 10 16c0-3.417 1.558-6.47 4.002-8.487Z" />
      <ReactSVG.Path d="M16 23.485A8.991 8.991 0 0 0 20 16c0-3.12-1.588-5.87-4-7.484A8.991 8.991 0 0 0 12 16c0 3.12 1.588 5.87 4 7.485Z" />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.513A8.96 8.96 0 0 1 21.002 7 9 9 0 1 1 18 24.487a11.069 11.069 0 0 0 1.601-1.627 10.953 10.953 0 0 0 2.4-6.86c0-2.595-.897-4.98-2.4-6.86A11.072 11.072 0 0 0 18 7.513ZM28.002 16a7.002 7.002 0 0 1-6 6.929 12.942 12.942 0 0 0 2-6.929c0-2.547-.734-4.924-2-6.929a7.002 7.002 0 0 1 6 6.929Z"
      />
    </ReactSVG.G>,
  ],
})
