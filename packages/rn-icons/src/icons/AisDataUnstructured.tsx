import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisDataUnstructured: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.778 22.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652Zm3.333 1.663a2 2 0 1 0-2.222 3.325 2 2 0 0 0 2.222-3.325ZM13.778 2.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652Zm3.333 1.663a2 2 0 1 0-2.222 3.326 2 2 0 0 0 2.222-3.326ZM23.778 2.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652Zm3.333 1.663a2 2 0 1 0-2.222 3.326 2 2 0 0 0 2.222-3.326Z"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 17v5.14a4 4 0 1 1-2 0V17H7a2 2 0 0 1-2-2v-5H2V2h8v8H7v5h18a2 2 0 0 1 2 2ZM8 4H4v4h4V4Zm16.889 23.663a2 2 0 1 0 2.222-3.325 2 2 0 0 0-2.222 3.325Z"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22h8v8h-8v-8Zm6 6v-4h-4v4h4Z"
      />
    </>,
  ],
})
