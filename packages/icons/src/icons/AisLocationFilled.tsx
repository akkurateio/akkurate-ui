
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisLocationFilled = createIcon({
  displayName: "AisLocationFilled",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.223 6.203c4.287-4.263 11.266-4.263 15.553 0h-.001a10.838 10.838 0 0 1 3.224 7.738 10.84 10.84 0 0 1-3.224 7.739l-7.071 7.029a.997.997 0 0 1-1.41 0L8.223 21.68a10.84 10.84 0 0 1-3.224-7.739c0-2.924 1.145-5.672 3.224-7.738ZM14 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Z" />
    </>
  ),
})
