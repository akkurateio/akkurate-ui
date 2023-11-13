import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisInWaitEnded = createIcon({
  displayName: "AisInWaitEnded",
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
        d="M9 22.76a6 6 0 0 1 2.095-4.556L13.667 16l-2.572-2.204A6 6 0 0 1 9 9.24V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.24a6 6 0 0 1-2.095 4.556L18.333 16l2.572 2.204A6 6 0 0 1 23 22.76V28a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.24Zm10.603-10.483L16 15.366l-3.603-3.089A4 4 0 0 1 11 9.24V4h10v5.24a4 4 0 0 1-1.397 3.037Z"
      />
    </>
  ),
})
