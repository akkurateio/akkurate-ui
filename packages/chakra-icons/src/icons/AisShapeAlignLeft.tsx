import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisShapeAlignLeft = createIcon({
  displayName: "AisShapeAlignLeft",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M6 2a1 1 0 0 0-1 1v26a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11V9h-6v2h6Zm2-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9ZM25 23v-6H11v6h14Zm2-6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6Z"
      />
    </>
  ),
})
