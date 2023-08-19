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
      <path d="M16.655 2.244a1 1 0 0 0-1.31 0l-12 10.4A1 1 0 0 0 3 13.4V29a1 1 0 1 0 2 0V13.857l11-9.534 11 9.534V29a1 1 0 1 0 2 0V13.4a1 1 0 0 0-.345-.756l-12-10.4Z" />
      <mask id="a" fill="#fff">
        <rect x="9" y="20" width="8" height="8" rx="1" />
      </mask>
      <rect
        x="9"
        y="20"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#a)"
      />
      <mask id="b" fill="#fff">
        <rect x="9" y="14" width="8" height="8" rx="1" />
      </mask>
      <rect
        x="9"
        y="14"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#b)"
      />
      <mask id="c" fill="#fff">
        <rect x="15" y="20" width="8" height="8" rx="1" />
      </mask>
      <rect
        x="15"
        y="20"
        width="8"
        height="8"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#c)"
      />
    </>
  ),
})
