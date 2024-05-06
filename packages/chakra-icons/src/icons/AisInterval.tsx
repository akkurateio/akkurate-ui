import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisInterval = createIcon({
  displayName: "AisInterval",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <rect x="15" y="9" width="2" height="14" rx="1" />
      <circle cx="16" cy="6" r="3" stroke="#000" strokeWidth="2" />
      <circle cx="16" cy="26" r="3" stroke="#000" strokeWidth="2" />
    </>
  ),
})
