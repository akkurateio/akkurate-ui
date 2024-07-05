import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisToolBox: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.393 7.538 6.526 4.303c-.31-.536-.06-1.227.55-1.325a6.002 6.002 0 0 1 6.5 8.21c-.139.338-.127.726.073 1.031L16.13 16H20v-4.083h-3a1 1 0 0 1-1-1V8.035a1 1 0 0 1 .553-.894l1.25-.626a1 1 0 0 0 .334-.27L19.7 4.293a1 1 0 0 1 .78-.375H29a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3V16h3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a1 1 0 0 1 1-1h6.078l-.44-.642a1.107 1.107 0 0 0-.873-.46 6.002 6.002 0 0 1-4.393-9.782c.39-.479 1.113-.349 1.422.187L6.66 8.538a1 1 0 1 0 1.732-1Zm1.732-1-.823-1.426c.893.3 1.683.914 2.19 1.792a3.99 3.99 0 0 1 .234 3.524c-.348.846-.369 1.945.25 2.889l1.617 2.463h-2.241l-1.064-1.553c-.606-.884-1.564-1.287-2.434-1.326a3.995 3.995 0 0 1-3.29-1.997 3.987 3.987 0 0 1-.458-2.792l.823 1.426a3 3 0 1 0 5.197-3ZM28 5.918h-7.039L19.7 7.494a3 3 0 0 1-1.001.81L18 8.652v1.264h10v-4Zm-6 10v-4h2v4h-2ZM4 18v7a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-7h-9v2a3 3 0 1 1-6 0v-2H4Zm13 0v2a1 1 0 1 1-2 0v-2h2Z"
      />
    </ReactSVG.G>,
  ],
})
