import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFolger: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M22.619 2.536A14.94 14.94 0 0 0 16 1C10.807 1 6.23 3.64 3.537 7.65l1.705.984c5.74 3.314 13.078 1.347 16.392-4.392l.985-1.706ZM7.65 28.463C3.64 25.77 1 21.193 1 16c0-2.376.552-4.623 1.536-6.619l1.706.985c5.74 3.314 7.706 10.653 4.392 16.392l-.984 1.705ZM28.463 24.35C25.77 28.36 21.193 31 16 31c-2.376 0-4.623-.552-6.619-1.536l.985-1.706c3.314-5.74 10.653-7.706 16.392-4.392l1.705.984ZM24.35 3.537C28.36 6.23 31 10.807 31 16c0 2.376-.552 4.623-1.536 6.619l-1.706-.985c-5.74-3.314-7.706-10.653-4.392-16.392l.984-1.705Z" />
    </ReactSVG.G>,
  ],
})
