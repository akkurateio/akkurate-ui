
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisChevronRight = createIcon({
  displayName: "AisChevronRight",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M11 28a.999.999 0 0 1-.707-1.707L20.586 16 10.293 5.707a.999.999 0 1 1 1.414-1.414l11 11a.999.999 0 0 1 0 1.414l-11 11A.997.997 0 0 1 11 28Z" />
    </>
  ),
})
