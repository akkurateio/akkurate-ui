import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisPanelLeftFilled = createIcon({
  displayName: "AisPanelLeftFilled",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M7 8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm4-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      />
    </>
  ),
})
