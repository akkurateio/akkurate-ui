import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisCookingPot = createIcon({
  displayName: "AisCookingPot",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M15 3a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V3ZM9 5a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19.118V26a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-6.882l2.447-1.224a1 1 0 1 0-.894-1.788L28 16.881V14a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2.882l-1.553-.777a1 1 0 0 0-.894 1.79L4 19.117ZM8 12a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2H8Zm18 4H6v2.48a.98.98 0 0 1 0 .041V26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16Z"
      />
      <path d="M22 4a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Z" />
    </>
  ),
})
