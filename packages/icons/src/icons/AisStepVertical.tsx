import React from "react"
import { createIcon } from "@chakra-ui/icon"

export const AisStepVertical = createIcon({
  displayName: "AisStepVertical",
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
        d="M15 3a1 1 0 1 1 2 0v7c0 .028-.001.055-.003.082a6.002 6.002 0 0 1 0 11.836c.002.027.003.054.003.082v7a1 1 0 1 1-2 0v-7c0-.028.001-.055.003-.082a6.002 6.002 0 0 1 0-11.836A1.022 1.022 0 0 1 15 10V3Zm-3 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      />
    </>
  ),
})
