import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisNotepad = createIcon({
  displayName: "AisNotepad",
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
        d="M11 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4Zm2 0h6v2h-6V4Zm8 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2H7v22h18V6h-4Z"
      />
    </>
  ),
})
