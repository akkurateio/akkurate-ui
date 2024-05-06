import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisNotification = createIcon({
  displayName: "AisNotification",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="m26.857 23.485-2.145-3.575A4.998 4.998 0 0 1 24 17.338V11c0-4.411-3.589-8-8-8s-8 3.589-8 8v6.338c0 .906-.247 1.796-.712 2.572l-2.145 3.575A1.001 1.001 0 0 0 6 25h6.007A4.001 4.001 0 0 0 16 28.933 4 4 0 0 0 19.993 25H26a.998.998 0 0 0 .857-1.515ZM16 26.932a1.998 1.998 0 0 1-1.993-1.933h3.986A1.998 1.998 0 0 1 16 26.932Zm-8.234-3.933 1.236-2.061A7 7 0 0 0 10 17.336v-6.338c0-3.309 2.691-6 6-6s6 2.691 6 6v6.338a7 7 0 0 0 .998 3.602l1.236 2.061H7.766Z" />
    </>
  ),
})
