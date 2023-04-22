
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisQrCode = createIcon({
  displayName: "AisQrCode",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M26 6h-4v4h4V6Z" /><path fillRule="evenodd" clipRule="evenodd" d="M30 14H18V2h12v12Zm-10-2h8V4h-8v8Z" /><path d="M6 22h4v4H6v-4Z" /><path fillRule="evenodd" clipRule="evenodd" d="M2 30h12V18H2v12Zm10-2H4v-8h8v8Z" /><path d="M28 26h2v4h-4v-2h2v-2ZM26 26h2v-4h2v-4h-4v2h2v2h-2v4ZM24 26h2v2h-2v-2ZM20 26h4v-6h-2v-2h-4v2h4v4h-2v-2h-2v2h2v2ZM20 26v2h2v2h-4v-4h2ZM6 6h4v4H6V6Z" /><path fillRule="evenodd" clipRule="evenodd" d="M2 14h12V2H2v12Zm10-2H4V4h8v8Z" />
    </>
  ),
})
