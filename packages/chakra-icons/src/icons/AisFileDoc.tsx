import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFileDoc = createIcon({
  displayName: "AisFileDoc",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M11 12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11ZM11 16a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11ZM10 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 19.172 2H8Zm10 2H8v24h16V10h-5a1 1 0 0 1-1-1V4Zm2 .828V8h3.172L20 4.828Z"
      />
    </>
  ),
})
