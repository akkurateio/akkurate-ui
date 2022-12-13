
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisUnderline = createIcon({
  displayName: "AisUnderline",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M16 23c3.86 0 7-3.141 7-7V6a1 1 0 1 0-2 0v10c0 2.757-2.243 5-5 5s-5-2.243-5-5V6a1 1 0 1 0-2 0v10c0 3.859 3.14 7 7 7ZM27 25H5a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z" />
    </>
  ),
})
