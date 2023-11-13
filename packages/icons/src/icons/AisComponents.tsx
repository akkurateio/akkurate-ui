import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisComponents = createIcon({
  displayName: "AisComponents",
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
        d="M7 4h6v14H7V4ZM5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm2 20h6v4H7v-4Zm-2 0a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4ZM19 8h6V4h-6v4Zm6 2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6Zm0 18h-6V14h6v14Zm2 0a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14Z"
      />
    </>
  ),
})
