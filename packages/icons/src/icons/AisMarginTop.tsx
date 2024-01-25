import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMarginTop = createIcon({
  displayName: "AisMarginTop",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M3 4a1 1 0 0 0 0 2h26a1 1 0 1 0 0-2H3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8Zm2 0h14v8H9v-8Z"
      />
      <path d="M4 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM29 27a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 27a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </>
  ),
})
