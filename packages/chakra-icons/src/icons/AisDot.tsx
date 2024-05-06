import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisDot = createIcon({
  displayName: "AisDot",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </>
  ),
})
