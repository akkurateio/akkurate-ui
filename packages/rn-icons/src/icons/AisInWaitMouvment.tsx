import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisInWaitMouvment: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.552 16.448-4.732-.364a4 4 0 0 0-3.135 1.16L3.979 20.95l7.071 7.07 3.706-3.705a4 4 0 0 0 1.16-3.135l-.364-4.732Zm.896-.896 4.732.364a4 4 0 0 0 3.135-1.16l3.706-3.706-7.071-7.07-3.706 3.705a4 4 0 0 0-1.16 3.135l.364 4.732Zm-5.475-1.462a6 6 0 0 0-4.702 1.74l-3.706 3.705a2 2 0 0 0 0 2.829l7.071 7.071a2 2 0 0 0 2.829 0l3.705-3.705a6 6 0 0 0 1.74-4.703l-.26-3.377 3.377.26a6 6 0 0 0 4.703-1.74l3.705-3.706a2 2 0 0 0 0-2.828l-7.071-7.071a2 2 0 0 0-2.828 0L15.83 6.27a6 6 0 0 0-1.74 4.703l.26 3.377-3.377-.26Z"
      />
      <ReactSVG.Path
        d="M3 11a6 6 0 0 1 6-6M29 21a6 6 0 0 1-6 6"
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ReactSVG.Path d="M18.248 27.832a1 1 0 0 1 0-1.664l3.197-2.131a1 1 0 0 1 1.555.832v4.262a1 1 0 0 1-1.555.832l-3.197-2.131ZM13.752 4.168a1 1 0 0 1 0 1.664l-3.197 2.132A1 1 0 0 1 9 7.13V2.87a1 1 0 0 1 1.555-.833l3.197 2.132Z" />
    </ReactSVG.G>,
  ],
})
