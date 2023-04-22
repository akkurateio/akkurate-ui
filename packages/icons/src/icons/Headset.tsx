
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const Headset = createIcon({
  displayName: "Headset",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M25 10h-.06a9 9 0 0 0-17.88 0H7a5 5 0 0 0 0 10h2v-9a7 7 0 1 1 14 0v10a4 4 0 0 1-3.17 3.91 4 4 0 1 0 .05 2A6 6 0 0 0 25 21v-1a5 5 0 1 0 0-10ZM4 15a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3Zm12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm9-10v-6a3 3 0 0 1 0 6Z" />
    </>
  ),
})
