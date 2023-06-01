
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
      <path d="M8 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM19 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM25.657 19.156C26.03 18.034 25.09 17 23.907 17H8.455c-1.182 0-2.122 1.034-1.75 2.156C8.025 23.132 11.77 26 16.181 26c4.413 0 8.157-2.868 9.476-6.844Z" /><path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14Zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
    </>
  ),
})
