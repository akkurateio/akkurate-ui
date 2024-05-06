import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisTextScale = createIcon({
  displayName: "AisTextScale",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M30 5v3h-8v18h-3V8h-8V5h19Z" />
      <path d="M7 26V14H2v-2h12v2H9v12H7Z" />
    </>
  ),
})
