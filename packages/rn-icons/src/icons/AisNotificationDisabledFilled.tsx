import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisNotificationDisabledFilled: FunctionComponent<IIconProps> =
  createIcon({
    viewBox: "0 0 32 32",
    path: [
      <ReactSVG.G key={1}>
        <ReactSVG.Path d="m25.734 21.613-1.022-1.703a4.995 4.995 0 0 1-.713-2.572V11c0-4.411-3.589-8-8-8a7.982 7.982 0 0 0-6.073 2.806l15.808 15.807ZM27.707 26.293l-22-22a.999.999 0 1 0-1.414 1.414l3.852 3.852A7.866 7.866 0 0 0 8 11v6.338c0 .905-.246 1.795-.713 2.572l-2.145 3.575A1.001 1.001 0 0 0 5.999 25h6.007a4 4 0 0 0 3.993 3.933A4 4 0 0 0 19.992 25h3.593l2.707 2.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414h.001ZM16 26.933A2 2 0 0 1 14.007 25h3.986A2 2 0 0 1 16 26.933Z" />
      </ReactSVG.G>,
    ],
  })
