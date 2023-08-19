import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisJoinRight: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6 7.02a8.96 8.96 0 0 1 2.402.493A11.062 11.062 0 0 0 12.4 9.14 10.954 10.954 0 0 0 10 16c0 2.595.898 4.98 2.4 6.86a11.059 11.059 0 0 0 1.602 1.627A8.96 8.96 0 0 1 11 25a9 9 0 1 1 .6-17.98ZM10 22.929a7.002 7.002 0 0 1 0-13.858A12.943 12.943 0 0 0 8 16c0 2.547.733 4.924 1.999 6.929Z"
      />
      <ReactSVG.Path d="M16 23.485A8.991 8.991 0 0 0 20 16c0-3.12-1.588-5.87-4-7.484A8.991 8.991 0 0 0 12 16c0 3.12 1.588 5.87 4 7.485Z" />
      <ReactSVG.Path d="M21.002 7c-1.053 0-2.063.18-3.002.513A10.978 10.978 0 0 1 22.002 16c0 3.417-1.558 6.47-4.002 8.487A9 9 0 1 0 21.002 7Z" />
    </ReactSVG.G>,
  ],
})
