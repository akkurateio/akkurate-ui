import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisShapeAlignBottom = createIcon({
  displayName: "AisShapeAlignBottom",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M30 26a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h26a1 1 0 0 1 1 1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15H9v6h2v-6Zm-2-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9ZM23 7h-6v14h6V7Zm-6-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6Z"
      />
    </>
  ),
})
