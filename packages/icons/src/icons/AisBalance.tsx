import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisBalance = createIcon({
  displayName: "AisBalance",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <rect x="15" y="2" width="2" height="27" rx="1" />
      <rect x="9" y="26" width="14" height="4" rx="1" />
      <path
        d="M5 9h6l2-2h6l2 2h6"
        stroke="#000"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.866 16.448c.145.24.161.49.1.68a.6.6 0 0 1-.415.4 10.076 10.076 0 0 1-6.102 0 .6.6 0 0 1-.416-.4.833.833 0 0 1 .101-.68L6.5 10.922l3.366 5.526ZM28.866 16.448c.145.24.161.49.1.68a.6.6 0 0 1-.415.4 10.076 10.076 0 0 1-6.102 0 .6.6 0 0 1-.416-.4.833.833 0 0 1 .101-.68l3.366-5.526 3.366 5.526Z"
        stroke="#000"
        strokeWidth="2"
      />
    </>
  ),
})
