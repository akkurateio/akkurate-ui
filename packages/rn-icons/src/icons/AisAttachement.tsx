import React, { FunctionComponent } from "react"
import { IIconProps, createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisAttachement: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <ReactSVG.G key={1}>
      <ReactSVG.Path d="M25.899 5.101a5.96 5.96 0 0 0-4.242-1.757 5.965 5.965 0 0 0-4.243 1.757l-2.121 2.121a.999.999 0 1 0 1.414 1.414l2.121-2.121a3.978 3.978 0 0 1 2.829-1.171c1.068 0 2.072.416 2.828 1.171a4.004 4.004 0 0 1 0 5.657l-5.657 5.657-5.656 5.657a3.978 3.978 0 0 1-2.829 1.171 3.976 3.976 0 0 1-2.828-1.171 4.004 4.004 0 0 1 0-5.657l5.091-5.091a2.003 2.003 0 0 1 3.415 1.414c0 .534-.208 1.037-.586 1.415-.025.025-.034.058-.056.084-.027.022-.06.032-.086.057l-3.535 3.536a.999.999 0 1 0 1.414 1.414l3.535-3.536c.025-.025.034-.058.056-.084.027-.022.06-.032.086-.057a3.972 3.972 0 0 0 1.172-2.829 3.97 3.97 0 0 0-1.172-2.828 4.004 4.004 0 0 0-5.657 0l-5.091 5.091a6.007 6.007 0 0 0 0 8.485 5.96 5.96 0 0 0 4.242 1.757 5.965 5.965 0 0 0 4.243-1.757l5.656-5.657 5.657-5.657a6.007 6.007 0 0 0 0-8.485Z" />
    </ReactSVG.G>,
  ],
})
