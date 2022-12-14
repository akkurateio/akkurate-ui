
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisSimCard = createIcon({
  displayName: "AisSimCard",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 27h19.532a1.996 1.996 0 0 0 1.536-.72l4.468-5.361c.3-.36.464-.813.464-1.281V7a2.002 2.002 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2Zm0-2V7h24v12.638L23.532 25H4ZM8 9h13a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H8a2.002 2.002 0 0 1-2-2V11a2.002 2.002 0 0 1 2-2Zm10 4h3v-2h-3v2Zm3 2h-3v2h3v-2Zm-5 6V11H8v2h4a1 1 0 0 1 1 1v7h3Zm-8-4h3v-2H8v2Zm3 2H8v2h3v-2Zm7 0v2h3v-2h-3Z" />
    </>
  ),
})
