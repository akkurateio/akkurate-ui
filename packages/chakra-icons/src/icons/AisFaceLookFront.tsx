import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFaceLookFront = createIcon({
  displayName: "AisFaceLookFront",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M13 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM11 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path d="M22 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 15a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
    </>
  ),
})
