import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFilter: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M12.875 27a.999.999 0 0 1-1-1v-8.57L4.185 6.578A1 1 0 0 1 5.001 5h21a1 1 0 0 1 .816 1.578l-7.69 10.852v6.348a1 1 0 0 1-.61.921l-5.25 2.222a1 1 0 0 1-.39.079h-.002ZM6.935 7l6.756 9.533c.12.169.185.371.185.578v7.379l3.25-1.375v-6.004c0-.207.064-.409.185-.578L24.067 7H6.935Z" />
    </>,
  ],
})
