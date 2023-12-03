import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisNotificationDot = createIcon({
  displayName: "AisNotificationDot",
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
        d="M16 3c.499 0 .987.046 1.461.134a3.983 3.983 0 0 0-.46 1.947 6.006 6.006 0 0 0-7 5.917v6.338a7 7 0 0 1-.999 3.602l-1.236 2.061h16.468l-1.236-2.061A7 7 0 0 1 22 17.336v-6.338c0-.72-.127-1.41-.36-2.049a3.982 3.982 0 0 0 1.833-.805c.34.887.527 1.85.527 2.856v6.338c0 .906.246 1.796.712 2.572l2.145 3.575A.999.999 0 0 1 26 25h-6.007A4 4 0 0 1 16 28.933 4.001 4.001 0 0 1 12.007 25H6a1 1 0 0 1-.857-1.515l2.145-3.575A5.007 5.007 0 0 0 8 17.338V11c0-4.411 3.589-8 8-8Zm0 23.932a1.998 1.998 0 0 1-1.993-1.933h3.986A1.998 1.998 0 0 1 16 26.932Z"
      />
      <path d="M21 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
})
