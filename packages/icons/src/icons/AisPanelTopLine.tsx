import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisPanelTopLine = createIcon({
  displayName: "AisPanelTopLine",
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
        d="M2 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm4-2h20a2 2 0 0 1 2 2v2H4V8a2 2 0 0 1 2-2Zm-2 6v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12H4Z"
      />
    </>
  ),
})
