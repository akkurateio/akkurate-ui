
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisGraphBar = createIcon({
  displayName: "AisGraphBar",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M29 26h-1V15a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11h-2v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h-2V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17H4V5a1 1 0 0 0-2 0v22a1 1 0 0 0 1 1h26a1 1 0 0 0 0-2ZM8 26V10h2v16H8Zm8 0v-6h2v6h-2Zm8 0V16h2v10h-2Z" />
    </>
  ),
})
