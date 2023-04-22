
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisPin = createIcon({
  displayName: "AisPin",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.707 2.293a1 1 0 1 0-1.414 1.414l.057.057-12.532 9.64-.11-.111a1 1 0 0 0-1.415 1.414l4.793 4.793-8.793 8.793a1 1 0 1 0 1.414 1.414l8.793-8.793 4.793 4.793a1 1 0 0 0 1.414-1.414l-.111-.111 9.64-12.532.057.057a1 1 0 0 0 1.414-1.414l-8-8Zm5.102 7.93-5.033-5.032-12.531 9.64 7.925 7.924 9.64-12.531Z" />
    </>
  ),
})
