import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisLightning: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.802 17.47-3.784 8.324 10.114-7.492-7.934-3.771 3.784-8.325-10.114 7.492 7.934 3.771Zm5.6-13.953c.427-.94-.677-1.832-1.506-1.218L6.339 13.083a1 1 0 0 0 .166 1.706l7.663 3.643-4.57 10.051c-.427.94.677 1.832 1.506 1.218l14.557-10.783a1 1 0 0 0-.166-1.707l-7.663-3.642 4.57-10.052Z"
      />
    </ReactSVG.G>,
  ],
})
