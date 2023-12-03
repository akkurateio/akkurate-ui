import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFirewall: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5a2 2 0 0 1 2-2h6c.364 0 .706.097 1 .268A1.99 1.99 0 0 1 15 3h6c.364 0 .706.097 1 .268A1.99 1.99 0 0 1 23 3h6a1 1 0 1 1 0 2h-6v4h6a1 1 0 1 1 0 2h-2v.524a3.995 3.995 0 0 0-2 0V11h-6v4h2.233a48.22 48.22 0 0 0-1.446 2H15v4h2.622c-.245.669-.418 1.33-.518 2H11v4h6.385c.21.697.506 1.37.88 2H11a1.99 1.99 0 0 1-1-.268A1.99 1.99 0 0 1 9 29H3a1 1 0 1 1 0-2h6v-4H3a1 1 0 1 1 0-2h2v-4H3a1 1 0 1 1 0-2h6v-4H3a1 1 0 1 1 0-2h2V5Zm2 12v4h6v-4H7Zm6-8H7V5h6v4Zm2-4h6v4h-6V5Zm2 10h-6v-4h6v4Z"
      />
      <ReactSVG.Path d="M28 22.397v-3c1.875 1.429 3 3 3 5A5 5 0 0 1 27.954 29 7.528 7.528 0 0 0 26 25.397 7.528 7.528 0 0 0 24.046 29 5.001 5.001 0 0 1 21 24.397c0-2 1-4 5-9v3c0 2.5 1 4 2 4Z" />
    </ReactSVG.G>,
  ],
})
