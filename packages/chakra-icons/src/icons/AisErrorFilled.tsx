import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisErrorFilled = createIcon({
  displayName: "AisErrorFilled",
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
        d="M21.044 4c1.037 0 2.004.575 2.522 1.5l5.045 9a3.088 3.088 0 0 1 0 3l-5.044 9a2.908 2.908 0 0 1-2.522 1.5h-10.09a2.906 2.906 0 0 1-2.521-1.5l-5.045-9a3.088 3.088 0 0 1 0-3l5.044-9A2.908 2.908 0 0 1 10.955 4h10.09ZM15 11a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6Zm2 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </>
  ),
})
