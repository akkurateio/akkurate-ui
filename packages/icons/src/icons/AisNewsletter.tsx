import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisNewsletter = createIcon({
  displayName: "AisNewsletter",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM14 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM13 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a3 3 0 0 0-3 3v6.96c-1.034.004-2 .824-2 2.004V27a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V13.964c0-1.18-.966-2-2-2.004V5a3 3 0 0 0-3-3H7Zm19 10.945-8.333 6.06a3 3 0 0 0-3.334 0L6 12.946V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7.945Zm2 13.805-8.655-6.491L27.95 14H28v12.75ZM16.6 20.7l9.733 7.3H5.667l9.733-7.3a1 1 0 0 1 1.2 0Zm-3.945-.441L4 26.75V14h.05l8.605 6.259Z"
      />
    </>
  ),
})
