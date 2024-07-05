import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisFileSlide = createIcon({
  displayName: "AisFileSlide",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="m15 19 2-2-2-2v4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 14a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6Zm-10 0h8v6h-8v-6Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 19.172 2H8Zm10 2H8v24h16V10h-5a1 1 0 0 1-1-1V4Zm2 .828V8h3.172L20 4.828Z"
      />
    </>
  ),
})