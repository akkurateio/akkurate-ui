import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPinterest: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M15.911 3a13 13 0 0 0-4.736 25.07 12.294 12.294 0 0 1 0-3.714l1.533-6.5A4.688 4.688 0 0 1 12.355 16c0-1.8 1.049-3.157 2.349-3.157a1.633 1.633 0 0 1 1.643 1.858c0 1.114-.705 2.785-1.077 4.326a1.858 1.858 0 0 0 1.932 2.35c2.302 0 4.085-2.442 4.085-5.952a5.135 5.135 0 0 0-5.432-5.293 5.626 5.626 0 0 0-5.868 5.646 5.033 5.033 0 0 0 .928 2.962.409.409 0 0 1 .093.371c-.102.409-.325 1.3-.362 1.477-.037.176-.195.287-.436.176-1.625-.762-2.637-3.13-2.637-5.042 0-4.095 2.98-7.865 8.589-7.865 4.503 0 8.013 3.213 8.013 7.512 0 4.476-2.786 8.078-6.75 8.078a3.49 3.49 0 0 1-2.981-1.485l-.808 3.092a14.438 14.438 0 0 1-1.616 3.407c1.263.374 2.575.555 3.891.539a13 13 0 1 0 0-25.999Z" />
    </ReactSVG.G>,
  ],
})
