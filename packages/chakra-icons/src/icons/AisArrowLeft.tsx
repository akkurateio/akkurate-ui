import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisArrowLeft = createIcon({
  displayName: "AisArrowLeft",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M26 15H10.414l4.293-4.293a.999.999 0 1 0-1.414-1.414l-6 6a1.001 1.001 0 0 0 0 1.414l6 6a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L10.414 17H26a1 1 0 0 0 0-2Z" />
    </>
  ),
})
