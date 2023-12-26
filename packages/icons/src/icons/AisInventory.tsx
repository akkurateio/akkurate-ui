import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisInventory = createIcon({
  displayName: "AisInventory",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <path d="M15.345 2.244a1 1 0 0 1 1.31 0l12 10.4A1 1 0 0 1 29 13.4V29a1 1 0 1 1-2 0V13.857L16 4.323 5 13.857V29a1 1 0 1 1-2 0V13.4a1 1 0 0 1 .345-.756l12-10.4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 29V17a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Zm2-7v-4h4v4h-4Zm6 6v-4h4v4h-4Zm-6-4h4v4h-4v-4Z"
      />
    </>
  ),
})
