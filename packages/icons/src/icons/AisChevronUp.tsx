
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisChevronUp = createIcon({
  displayName: "AisChevronUp",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M27 22a.997.997 0 0 1-.707-.293L16 11.414 5.707 21.707a.999.999 0 1 1-1.414-1.414l11-11a.999.999 0 0 1 1.414 0l11 11A.999.999 0 0 1 27 22Z" />
    </>
  ),
})
