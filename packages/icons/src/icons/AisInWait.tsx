import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisInWait = createIcon({
  displayName: "AisInWait",
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
        d="m16 16.634-3.603 3.089A4 4 0 0 0 11 22.76V28h10v-5.24a4 4 0 0 0-1.397-3.037L16 16.634Zm0-1.268 3.603-3.089A4 4 0 0 0 21 9.24V4H11v5.24a4 4 0 0 0 1.397 3.037L16 15.366Zm-4.905 2.838A6 6 0 0 0 9 22.76V28a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.24a6 6 0 0 0-2.095-4.556L18.333 16l2.572-2.204A6 6 0 0 0 23 9.24V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v5.24a6 6 0 0 0 2.095 4.556L13.667 16l-2.572 2.204Z"
      />
    </>
  ),
})
