import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisCheckmarkFilled = createIcon({
  displayName: "AisCheckmarkFilled",
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
        d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm6.715-16.285-8 8a.997.997 0 0 1-1.414 0l-4.008-4.008a.999.999 0 1 1 1.414-1.414l3.301 3.301 7.293-7.293a.999.999 0 1 1 1.414 1.414Z"
      />
    </>
  ),
})
