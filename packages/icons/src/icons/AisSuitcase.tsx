
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisSuitcase = createIcon({
  displayName: "AisSuitcase",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h5a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h5Zm2-2h6v2h-6V5Zm-2 20H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h5v16Zm2 0V9h6v16h-6Zm8 0h5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-5v16Z" />
    </>
  ),
})
