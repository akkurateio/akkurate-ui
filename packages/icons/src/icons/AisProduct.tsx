
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisProduct = createIcon({
  displayName: "AisProduct",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M8 19a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" /><path d="M26 4H6a2.002 2.002 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2Zm-8 2v4h-4V6h4ZM6 26V6h6v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6h6l.001 20H6Z" />
    </>
  ),
})
