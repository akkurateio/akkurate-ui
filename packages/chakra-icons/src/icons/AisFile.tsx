import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFile = createIcon({
  displayName: "AisFile",
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
        d="M6 4a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 26 8.828V28a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm12 0H8v24h16V10h-5a1 1 0 0 1-1-1V4Zm5.172 4L20 4.828V8h3.172Z"
      />
    </>
  ),
})
