import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFaceLookDown = createIcon({
  displayName: "AisFaceLookDown",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M13 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm1.985 7.25a2 2 0 1 0-3.969 0 3 3 0 1 1 3.969 0ZM17 15a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5 0a2 2 0 0 0-1.985 2.25 3 3 0 1 1 3.969 0A2 2 0 0 0 22 15Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
    </>
  ),
})
