import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisSection = createIcon({
  displayName: "AisSection",
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
        d="M2 7a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm0 6a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H3Zm-1 5a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H3Z"
      />
    </>
  ),
})
