import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisUnderline = createIcon({
  displayName: "AisUnderline",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M4 26h24v2H4v-2Zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 1 0 10 0V5h2v11a7 7 0 0 1-7 7Z" />
    </>
  ),
})
