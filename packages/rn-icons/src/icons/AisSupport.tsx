import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisSupport: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Zm-2 0c0 2.038-.61 3.934-1.657 5.515L22.16 19.33c.536-.99.841-2.124.841-3.33s-.305-2.34-.841-3.33l2.184-2.185A9.954 9.954 0 0 1 26 16Zm-6.67 6.159 2.185 2.184A9.954 9.954 0 0 1 16 26a9.954 9.954 0 0 1-5.515-1.657l2.185-2.184c.99.536 2.124.841 3.33.841s2.34-.305 3.33-.841ZM9.841 19.33A6.969 6.969 0 0 1 9 16c0-1.206.305-2.34.841-3.33l-2.184-2.185A9.953 9.953 0 0 0 6 16c0 2.038.61 3.934 1.657 5.515L9.84 19.33Zm.644-11.673A9.953 9.953 0 0 1 16 6c2.038 0 3.934.61 5.515 1.657L19.33 9.84A6.969 6.969 0 0 0 16 9c-1.206 0-2.34.305-3.33.841l-2.185-2.184ZM21 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </>,
  ],
})
