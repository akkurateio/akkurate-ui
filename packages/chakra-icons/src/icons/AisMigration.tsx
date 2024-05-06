import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMigration = createIcon({
  displayName: "AisMigration",
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
        d="M11.293 14.293a1 1 0 0 1 1.414 0L16 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4H12.465c.34.588.535 1.271.535 2 0 .729-.195 1.412-.535 2H24a2 2 0 1 0 0-4Zm-7 6h7a4 4 0 0 0 0-8H7a4 4 0 1 0 0 8h8v9a1 1 0 1 0 2 0v-9ZM7 4h2a2 2 0 1 1 0 4H7a2 2 0 0 1 0-4Zm11.535 20H7a2 2 0 1 0 0 4h11.535A3.982 3.982 0 0 1 18 26c0-.729.195-1.412.535-2ZM22 22h2a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8h15Zm0 2a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4h-2Z"
      />
    </>
  ),
})
