import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisAppWindow = createIcon({
  displayName: "AisAppWindow",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M27 5H5C3.346 5 2 6.346 2 8v16c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3Zm1 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16Z" />
      <circle cx="7" cy="10" r="1" />
      <circle cx="11" cy="10" r="1" />
    </>
  ),
})
