import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisShieldUser: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <ReactSVG.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30a.996.996 0 0 1-.483-.125C15.088 29.639 5 23.972 5 15.565V4.13a1 1 0 0 1 .888-.994l10-1.131c.074-.008.15-.008.225 0l10 1.131a1 1 0 0 1 .888.994v11.435c0 8.406-10.087 14.073-10.517 14.31-.15.083-.318.125-.484.125ZM7 5.024v10.541c0 2.73 1.336 5.181 3.005 7.177a6 6 0 0 1 11.99-.007C23.663 20.738 25 18.29 25 15.565V5.024l-9-1.018-9 1.018Zm13 19.783a27.876 27.876 0 0 1-4 3.029 27.769 27.769 0 0 1-4-3.024V23a4 4 0 0 1 8 0v1.807Z"
      />
    </ReactSVG.G>,
  ],
})
