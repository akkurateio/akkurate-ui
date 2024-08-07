import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisLasso = createIcon({
  displayName: "AisLasso",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M21 4H11c-4.411 0-8 3.589-8 8 0 3.364 2.093 6.237 5.042 7.415a2.99 2.99 0 0 0 1.699 2.298C9.002 24.188 6.713 26 4 26a1 1 0 1 0 0 2c3.759 0 6.91-2.61 7.762-6.11A2.996 2.996 0 0 0 13.816 20H21c4.411 0 8-3.589 8-8s-3.589-8-8-8ZM11 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10-2h-7.184A2.996 2.996 0 0 0 11 16a2.991 2.991 0 0 0-2.541 1.424A5.995 5.995 0 0 1 5 12c0-3.309 2.691-6 6-6h10c3.309 0 6 2.691 6 6s-2.691 6-6 6Z" />
    </>
  ),
})
