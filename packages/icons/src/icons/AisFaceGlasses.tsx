
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisFaceGlasses = createIcon({
  displayName: "AisFaceGlasses",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z" /><rect x="7" y="11" width="7" height="7" rx="3" stroke="#000" stroke-width="2"/><rect x="18" y="11" width="7" height="7" rx="3" stroke="#000" stroke-width="2"/><rect x="11" y="22" width="10" height="2" rx="1" /><path  d="M3 12h4v2H3zM14 12h4v2h-4zM25 12h4v2h-4z"/>
    </>
  ),
})
