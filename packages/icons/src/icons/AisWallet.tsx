
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisWallet = createIcon({
  displayName: "AisWallet",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M25 8H7c-.352 0-.686.072-1 .184V7a1 1 0 0 1 1-1h18V4H7C5.346 4 4 5.346 4 7v18c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V11c0-1.654-1.346-3-3-3Zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2h-6c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h6v2Zm0-4-6 .002V15h6v6Z" /><path d="M23 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </>
  ),
})
