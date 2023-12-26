import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisShapeAlignCenterHorizontal = createIcon({
  displayName: "AisShapeAlignCenterHorizontal",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7a2 2 0 0 0-2 2v6h-2v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3a1 1 0 1 0 0 2h4v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6h4a1 1 0 1 0 0-2h-4V9a2 2 0 0 0-2-2h-6Zm6 2h-6v14h6V9Zm-12 4H9v6h2v-6Z"
      />
    </>
  ),
})
