import React from "react"
import { createIcon } from "native-base"
import * as ReactSVG from "react-native-svg"

export const AisPower = createIcon({
  viewBox: "0 0 32 32",
  path: [
    <>
      <ReactSVG.Path d="M17 5a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V5Z" />
      <ReactSVG.Path d="M21 5.091a1 1 0 0 0-.834 1.818A10 10 0 0 1 26 16C26 21.523 21.523 26 16 26S6 21.523 6 16.001a10 10 0 0 1 5.834-9.092A1 1 0 0 0 11 5.09c-4.13 1.895-7 6.066-7 10.91C4 22.628 9.373 28 16 28s12-5.372 12-11.999c0-4.844-2.87-9.015-7-10.91Z" />
    </>,
  ],
})
