
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisMaximaze = createIcon({
  displayName: "AisMaximaze",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		fill: "currentColor",
	},
  path: (
    <>
      <path d="M18 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-3.293 3.293a1 1 0 0 1-1.414-1.414L20.586 10H19a1 1 0 0 1-1-1ZM14 23a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.293-3.293a1 1 0 0 1 1.414 1.414L11.414 22H13a1 1 0 0 1 1 1Z" /><path fillRule="evenodd" clipRule="evenodd" d="M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm4-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </>
  ),
})
