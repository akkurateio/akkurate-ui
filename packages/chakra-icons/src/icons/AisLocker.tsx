import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisLocker = createIcon({
  displayName: "AisLocker",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M23 6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H7ZM23 22a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM22 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm24 2H14v6h14V4ZM4 4h8v24H4V4Zm24 24H14v-8h14v8Zm0-16v6H14v-6h14Z"
      />
    </>
  ),
})
