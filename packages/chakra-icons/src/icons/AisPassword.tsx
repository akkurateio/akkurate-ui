import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisPassword = createIcon({
  displayName: "AisPassword",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M10.707 14.707a1 1 0 0 0-1.414-1.414L8 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L6.586 16l-1.293 1.293a1 1 0 1 0 1.414 1.414L8 17.414l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 16l1.293-1.293ZM18.707 13.293a1 1 0 0 1 0 1.414L17.414 16l1.293 1.293a1 1 0 0 1-1.414 1.414L16 17.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L14.586 16l-1.293-1.293a1 1 0 0 1 1.414-1.414L16 14.586l1.293-1.293a1 1 0 0 1 1.414 0ZM22 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6Zm4-2h22a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
      />
    </>
  ),
})
