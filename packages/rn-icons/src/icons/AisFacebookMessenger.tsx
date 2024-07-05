import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisFacebookMessenger: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.G clip-path="url(#a)">
        <ReactSVG.Path d="M1.001 15.549C1.001 7.186 7.551 1 16.001 1S31 7.188 31 15.549s-6.55 14.547-15 14.547c-1.512 0-2.975-.2-4.338-.575a1.2 1.2 0 0 0-.8.063l-2.987 1.312a1.2 1.2 0 0 1-1.688-1.062L6.1 27.159a1.213 1.213 0 0 0-.4-.85A14.237 14.237 0 0 1 1.002 15.55v-.001Zm10.4-2.738-4.4 7c-.437.663.4 1.424 1.025.938l4.738-3.588a.882.882 0 0 1 1.087 0l3.5 2.625c1.05.788 2.55.5 3.25-.6l4.4-7c.438-.662-.4-1.412-1.025-.937l-4.737 3.587a.864.864 0 0 1-1.075 0l-3.5-2.625a2.249 2.249 0 0 0-3.263.6Z" />
      </ReactSVG.G>
      <ReactSVG.Defs>
        <ReactSVG.ClipPath id="a">
          <ReactSVG.Path
            fill="#fff"
            transform="translate(1 1)"
            d="M0 0h30v30H0z"
          />
        </ReactSVG.ClipPath>
      </ReactSVG.Defs>
    </ReactSVG.G>,
  ],
})
