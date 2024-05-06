import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisHelp = createIcon({
  displayName: "AisHelp",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M16 15a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.127a4.013 4.013 0 0 0 2.285-1.59 4 4 0 1 0-6.597-4.525c-.413.61.025 1.361.736 1.552.356.095.713-.126.92-.431a1.999 1.999 0 0 1 3.655 1.173 2 2 0 0 1-1.731 1.93 1.184 1.184 0 0 0-.136.027A1.002 1.002 0 0 0 16 15ZM15 22a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13Zm-2 0c0 6.075-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5s11 4.925 11 11Z"
      />
    </>
  ),
})
