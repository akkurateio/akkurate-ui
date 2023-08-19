import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisCashRegister = createIcon({
  displayName: "AisCashRegister",
  viewBox: "0 0 32 32",
  defaultProps: {
    fill: "currentColor",
    boxSize: "24px",
  },
  path: (
    <>
      <mask id="a" fill="#fff">
        <rect x="2" y="18" width="28" height="10" rx="1" />
      </mask>
      <rect
        x="2"
        y="18"
        width="28"
        height="10"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#a)"
      />
      <mask id="b" fill="#fff">
        <rect x="7" y="14" width="8" height="6" rx="1" />
      </mask>
      <rect
        x="7"
        y="14"
        width="8"
        height="6"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#b)"
      />
      <rect x="25.5" y="13.5" width="1" height="6" rx=".5" stroke="#000" />
      <rect
        x="2.5"
        y="23.5"
        width="1"
        height="6"
        rx=".5"
        transform="rotate(-90 2.5 23.5)"
        stroke="#000"
      />
      <mask id="c" fill="#fff">
        <rect x="22" y="8" width="8" height="6" rx="1" />
      </mask>
      <rect
        x="22"
        y="8"
        width="8"
        height="6"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#c)"
      />
      <mask id="d" fill="#fff">
        <rect x="4" y="4" width="14" height="12" rx="1" />
      </mask>
      <rect
        x="4"
        y="4"
        width="14"
        height="12"
        rx="1"
        stroke="#000"
        stroke-width="4"
        mask="url(#d)"
      />
    </>
  ),
})
