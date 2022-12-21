
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisMarkdown = createIcon({
  displayName: "AisMarkdown",
  viewBox: "0 0 32 32",
  defaultProps: {
		fill: "currentColor",
    boxSize: "24px",
	},
  path: (
    <>
      <path d="M6 11v10h2.71v-5.735l2.71 3.676 2.709-3.676V21h2.71V11h-2.71l-2.71 3.677L8.71 11H6ZM18.871 16.147 22.936 21 27 16.147h-2.71V11h-2.71v5.147h-2.709Z" /><path fillRule="evenodd" clipRule="evenodd" d="M4.313 7C3.006 7 2 8.085 2 9.356v13.288C2 23.914 3.006 25 4.313 25h23.374C28.994 25 30 23.915 30 22.644V9.356C30 8.086 28.994 7 27.687 7H4.313ZM4 9.356C4 9.129 4.17 9 4.313 9h23.374c.143 0 .313.129.313.356v13.288c0 .227-.17.356-.313.356H4.313C4.17 23 4 22.871 4 22.644V9.356Z" />
    </>
  ),
})
