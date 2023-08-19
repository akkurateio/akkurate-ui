import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisTag = createIcon({
  displayName: "AisTag",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2a3 3 0 0 0-3 3v10.172a3 3 0 0 0 .879 2.12l12 12a3 3 0 0 0 4.242 0l10.172-10.17a3 3 0 0 0 0-4.243l-12-12A3 3 0 0 0 15.172 2H5ZM4 5a1 1 0 0 1 1-1h10.172a1 1 0 0 1 .707.293l12 12a1 1 0 0 1 0 1.414L17.707 27.88a1 1 0 0 1-1.414 0l-12-12A1 1 0 0 1 4 15.172V5Z"
      />
    </>
  ),
})
