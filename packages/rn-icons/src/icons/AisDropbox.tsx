import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDropbox: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M8.5 3 1 7.777l7.5 4.778 7.501-4.777L8.5 3Zm15 0L16 7.777l7.5 4.778L31 7.778 23.5 3ZM1 17.334l7.5 4.777 7.501-4.777L8.5 12.555 1 17.334Zm22.5-4.779L16 17.334l7.5 4.777 7.5-4.777-7.5-4.779Zm-15 11.15 7.501 4.778 7.5-4.778-7.5-4.777L8.5 23.704Z" />
    </ReactSVG.G>,
  ],
})
