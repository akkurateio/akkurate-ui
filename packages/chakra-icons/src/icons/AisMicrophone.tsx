import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMicrophone = createIcon({
  displayName: "AisMicrophone",
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
        d="M12 6a4 4 0 0 1 8 0v12a4 4 0 0 1-8 0V6Zm6 0v12a2 2 0 1 1-4 0V6a2 2 0 1 1 4 0Z"
      />
      <path d="M15 25.938A8.001 8.001 0 0 1 8 18a1 1 0 1 1 2 0 6 6 0 0 0 12 0 1 1 0 1 1 2 0 8.001 8.001 0 0 1-7 7.938V28h3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h3v-2.062Z" />
    </>
  ),
})
