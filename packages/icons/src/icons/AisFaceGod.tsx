
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFaceGod = createIcon({
  displayName: "AisFaceGod",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z" /><rect x="8.5" y="13.5" width="5" height="1" rx=".5" stroke="#000"/><rect x="18.5" y="13.5" width="5" height="1" rx=".5" stroke="#000"/><path fillRule="evenodd" clipRule="evenodd" d="M23.907 17c1.183 0 2.123 1.034 1.75 2.156C24.338 23.132 20.594 26 16.181 26c-4.412 0-8.156-2.868-9.476-6.844C6.333 18.034 7.273 17 8.455 17h15.452Z" />
    </>
  ),
})
