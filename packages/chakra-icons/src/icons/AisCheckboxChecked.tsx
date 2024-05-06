import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisCheckboxChecked = createIcon({
  displayName: "AisCheckboxChecked",
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
        d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm13.707 9.707a1 1 0 0 0-1.414-1.414l-6.255 6.255-2.295-2.55a1 1 0 0 0-1.486 1.338l3 3.333a1 1 0 0 0 1.45.038l7-7Z"
      />
    </>
  ),
})
