import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisMagic: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M13.511 5.277c.113-.527.865-.527.978 0l1.388 6.462a.5.5 0 0 0 .384.384l6.463 1.388c.526.113.526.865 0 .978l-6.463 1.388a.5.5 0 0 0-.384.384l-1.388 6.463c-.113.526-.865.526-.978 0l-1.388-6.463a.5.5 0 0 0-.384-.384l-6.462-1.388c-.527-.113-.527-.865 0-.978l6.462-1.388a.5.5 0 0 0 .384-.384l1.388-6.462ZM23.511 19.276c.113-.526.865-.526.978 0l.504 2.347a.5.5 0 0 0 .384.384l2.347.504c.526.113.526.865 0 .978l-2.347.504a.5.5 0 0 0-.384.384l-.504 2.347c-.113.526-.865.526-.978 0l-.504-2.347a.5.5 0 0 0-.384-.384l-2.347-.504c-.526-.113-.526-.865 0-.978l2.347-.504a.5.5 0 0 0 .384-.384l.504-2.347Z" />
    </ReactSVG.G>,
  ],
})
