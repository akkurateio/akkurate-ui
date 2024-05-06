import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFlag = createIcon({
  displayName: "AisFlag",
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
        d="M7 3a1 1 0 0 0-2 0v26a1 1 0 1 0 2 0v-9h19a1 1 0 0 0 .733-1.68L20.865 12l5.868-6.32A1 1 0 0 0 26 4H7V3Zm0 3v12h16.707l-4.94-5.32a1 1 0 0 1 0-1.36L23.707 6H7Z"
      />
    </>
  ),
})
