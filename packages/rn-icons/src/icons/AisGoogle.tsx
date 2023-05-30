import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisGoogle: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M20.983 10.096c-1.354-1.29-3.066-1.95-4.983-1.95-3.39 0-6.262 2.286-7.29 5.373A7.837 7.837 0 0 0 8.296 16c0 .867.141 1.7.412 2.48 1.03 3.088 3.9 5.374 7.291 5.374 1.755 0 3.24-.476 4.41-1.256 1.364-.921 2.285-2.275 2.6-3.879H16v-4.886h12.242c.13.791.206 1.604.206 2.46 0 3.954-1.409 7.29-3.857 9.555C22.446 27.83 19.51 29 16 29c-5.08 0-9.468-2.925-11.602-7.172a12.849 12.849 0 0 1 0-11.656C6.531 5.925 10.918 3 16 3c3.51 0 6.446 1.29 8.688 3.39l-3.705 3.706Z" />
    </>,
  ],
})
