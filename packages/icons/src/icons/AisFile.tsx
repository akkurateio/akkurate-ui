
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFile = createIcon({
  displayName: "AisFile",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M20.414 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.586L20.414 2ZM20 4.414 23.586 8H20V4.414ZM8 28V4h10v6h6v18H8Z" />
    </>
  ),
})
