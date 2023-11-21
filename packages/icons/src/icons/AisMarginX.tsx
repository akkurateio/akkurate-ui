import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMarginX = createIcon({
  displayName: "AisMarginX",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M27 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 23V9h-8v14h8Zm2-14a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9Z"
      />
      <path d="M5 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
    </>
  ),
})
