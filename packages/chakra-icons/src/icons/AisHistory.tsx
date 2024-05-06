import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisHistory = createIcon({
  displayName: "AisHistory",
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
        d="M16 8a1 1 0 0 1 1 1v6.586l2.707 2.707a1 1 0 0 1-1.414 1.414L15 16.414V9a1 1 0 0 1 1-1Z"
      />
      <path d="m22.657 21.243 1.09 1.09a10.006 10.006 0 1 0-7.85 3.672A1 1 0 1 1 16 28h-.007a12 12 0 1 1 9.17-4.251l1.15 1.15c.63.63.184 1.708-.706 1.708H21.95a1 1 0 0 1-1-1V21.95c0-.891 1.077-1.337 1.707-.707Z" />
    </>
  ),
})
