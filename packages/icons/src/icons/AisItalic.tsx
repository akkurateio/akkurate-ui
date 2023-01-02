
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisItalic = createIcon({
  displayName: "AisItalic",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14H25Z" />
    </>
  ),
})
