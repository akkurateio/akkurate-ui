import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMedication = createIcon({
  displayName: "AisMedication",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M24 2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM10 14h3v10h-3V14Zm12 14H10v-2h4a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-4v-2h12v18ZM8 8V4h16v4H8Z" />
    </>
  ),
})
