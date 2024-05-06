import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMarginY = createIcon({
  displayName: "AisMarginY",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M2 5a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12H9v8h14v-8ZM9 10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H9Z"
      />
      <path d="M2 27a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" />
    </>
  ),
})
