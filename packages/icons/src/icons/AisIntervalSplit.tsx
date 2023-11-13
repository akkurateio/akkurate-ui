import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisIntervalSplit = createIcon({
  displayName: "AisIntervalSplit",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <rect x="5" y="9" width="2" height="14" rx="1" />
      <circle cx="6" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="26" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="6" cy="26" r="3" stroke="#000" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 25v2A18 18 0 0 0 27 9h-2A16 16 0 0 1 9 25Z"
      />
    </>
  ),
})
