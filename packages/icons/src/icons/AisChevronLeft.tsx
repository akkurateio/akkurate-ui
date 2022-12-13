
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisChevronLeft = createIcon({
  displayName: "AisChevronLeft",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M21 28a.997.997 0 0 1-.707-.293l-11-11a.999.999 0 0 1 0-1.414l11-11a.999.999 0 1 1 1.414 1.414L11.414 16l10.293 10.293A.999.999 0 0 1 21 28Z" />
    </>
  ),
})
