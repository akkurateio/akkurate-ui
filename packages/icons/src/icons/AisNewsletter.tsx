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
      <path
        d="M5 14V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v9"
        stroke="#000"
        strokeWidth="2"
      />
      <rect x="14.5" y="6.5" width="9" height="1" rx=".5" stroke="#000" />
      <rect
        x="9"
        y="7"
        width="2"
        height="2"
        rx="1"
        stroke="#000"
        strokeWidth="2"
      />
      <rect x="14.5" y="10.5" width="9" height="1" rx=".5" stroke="#000" />
      <rect x="12.5" y="14.5" width="7" height="1" rx=".5" stroke="#000" />
      <path
        d="m18 20 9.412-6.845a1 1 0 0 1 1.588.809V27a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V13.964a1 1 0 0 1 1.588-.809L14 20"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="m4 28 10.8-8.1a2 2 0 0 1 2.4 0L28 28"
        stroke="#000"
        strokeWidth="2"
      />
    </>
  ),
})
