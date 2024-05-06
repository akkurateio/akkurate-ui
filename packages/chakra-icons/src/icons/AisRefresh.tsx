import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisRefresh = createIcon({
  displayName: "AisRefresh",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M27 20h-6a1 1 0 1 0 0 2h4.205c-2.012 3.08-5.473 5-9.205 5-5.674 0-10.485-4.429-10.953-10.082a1.001 1.001 0 0 0-1.993.164C3.607 23.766 9.293 29 16 29c3.91 0 7.563-1.786 10-4.725V27a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1ZM16 3C12.09 3 8.437 4.786 6 7.725V5a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H6.795C8.807 6.92 12.268 5 16 5c5.674 0 10.485 4.429 10.953 10.082a1 1 0 0 0 .996.918c.027 0 .055 0 .083-.003.55-.046.959-.529.914-1.079C28.393 8.234 22.707 3 16 3Z" />
    </>
  ),
})
