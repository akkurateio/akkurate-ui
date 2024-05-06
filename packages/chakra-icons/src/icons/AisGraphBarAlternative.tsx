import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisGraphBarAlternative = createIcon({
  displayName: "AisGraphBarAlternative",
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
        d="M21 26V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v20h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8h2V14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12h2Zm2-20h2v20h-2V6Zm-6 8h-2v12h2V14ZM7 18h2v8H7v-8Z"
      />
    </>
  ),
})
