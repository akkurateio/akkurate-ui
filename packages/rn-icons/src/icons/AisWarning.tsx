import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisWarning = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M29.625 24.06 18.27 5.272A2.628 2.628 0 0 0 16 4.001a2.63 2.63 0 0 0-2.27 1.271L2.375 24.06a2.552 2.552 0 0 0-.04 2.601 2.616 2.616 0 0 0 2.31 1.34h22.71c.973 0 1.836-.501 2.31-1.34a2.55 2.55 0 0 0-.04-2.601Zm-1.703 1.618a.631.631 0 0 1-.567.322H4.645a.632.632 0 0 1-.567-.322.559.559 0 0 1 .009-.583L15.442 6.307A.643.643 0 0 1 16 6c.112 0 .391.03.558.307l11.355 18.788a.559.559 0 0 1 .009.583Z" />
      <ReactSVG.Path d="M16 12a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1ZM16 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </>,
  ],
})
