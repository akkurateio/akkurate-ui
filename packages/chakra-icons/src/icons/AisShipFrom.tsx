import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisShipFrom = createIcon({
  displayName: "AisShipFrom",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M27 11a5 5 0 0 0-5-5h-9a5 5 0 0 0-5 5v1.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L6 12.586V11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v7a1 1 0 1 1-2 0v-7ZM28 21a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-2Zm-4-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"
      />
    </>
  ),
})
