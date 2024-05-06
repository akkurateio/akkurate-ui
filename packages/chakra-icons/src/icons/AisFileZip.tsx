import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFileZip = createIcon({
  displayName: "AisFileZip",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M18 6h-2v2h2V6ZM16 8h-2v2h2V8ZM18 10h-2v2h2v-2ZM16 12h-2v2h2v-2ZM18 14h-2v2h2v-2ZM16 16h-2v2h2v-2ZM18 18h-2v2h2v-2Z" />
      <path d="m14 21.586-.707.707A1 1 0 0 0 13 23v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a.997.997 0 0 0-.293-.707l-2-2A.997.997 0 0 0 16 20h-2v1.586Zm3 1.828V28h-2v-4.586l1-1 1 1ZM14 4h2v2h-2z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4h11.172L24 8.828V28h-3v2h3a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 19.172 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h3v-2H8V4Z"
      />
    </>
  ),
})
