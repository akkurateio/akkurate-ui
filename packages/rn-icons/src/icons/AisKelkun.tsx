import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisKelkun: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15ZM12 7H7v18h5V7Zm1.736 6.267 4.35-5.52c.372-.472.933-.747 1.53-.747h5.19l-6.172 7.367a1.482 1.482 0 0 0-.059 1.822L25 25h-5.072a1.95 1.95 0 0 1-1.602-.84l-4.71-6.787a3.46 3.46 0 0 1 .122-4.106h-.002Z"
      />
    </ReactSVG.G>,
  ],
})
