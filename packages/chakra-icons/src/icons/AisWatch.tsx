import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisWatch = createIcon({
  displayName: "AisWatch",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M15 11a1 1 0 1 1 2 0v4.586l2.563 2.562a1 1 0 0 1-1.415 1.415l-2.828-2.829-.014-.014A.997.997 0 0 1 15 16v-5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4v2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a4 4 0 0 0 4-4v-6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2 4 4 0 0 0-4-4V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2Zm10 0h-8v2h8V4Zm4 6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10ZM12 26v2h8v-2h-8Z"
      />
    </>
  ),
})
