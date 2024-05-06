import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMarginRight = createIcon({
  displayName: "AisMarginRight",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M28 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0V3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8Zm0 16h-8V9h8v14Z"
      />
      <path d="M6 28a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM5 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM5 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 22a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
    </>
  ),
})
