import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisPanelLeftLine = createIcon({
  displayName: "AisPanelLeftLine",
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
        d="M2 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm8-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10V6ZM8 6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2V6Z"
      />
    </>
  ),
})
