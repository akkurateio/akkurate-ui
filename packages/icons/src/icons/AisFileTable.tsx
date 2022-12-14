
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFileTable = createIcon({
  displayName: "AisFileTable",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 12h12v10H10V12Zm10 8v-2h-3v2h3Zm0-4v-2h-3v2h3Zm-5 2v2h-3v-2h3Zm0-2v-2h-3v2h3Z" /><path fillRule="evenodd" clipRule="evenodd" d="M20.414 2H8c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7.586L20.414 2ZM20 4.414 23.586 8H20V4.414ZM8 28V4h10v6h6v18H8Z" />
    </>
  ),
})
