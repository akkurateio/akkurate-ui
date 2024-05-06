import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisMediaLibrary = createIcon({
  displayName: "AisMediaLibrary",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M21 4H11a2 2 0 0 1 2-2h6c1.1 0 2 .9 2 2ZM6 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2H6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 30c1.1 0 2-.9 2-2V12a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24ZM4 28h24V12H4v16Z"
      />
      <path d="M19.933 19.2a1 1 0 0 1 0 1.6l-5.333 4A1 1 0 0 1 13 24v-8a1 1 0 0 1 1.6-.8l5.333 4Z" />
    </>
  ),
})
