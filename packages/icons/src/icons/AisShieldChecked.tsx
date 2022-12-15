
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const AisShieldChecked = createIcon({
  displayName: "AisShieldChecked",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		fill: "currentColor",
	},
  path: (
    <>
      <path d="m26.112 3.137-10-1.131a1.058 1.058 0 0 0-.225 0l-10 1.131a1 1 0 0 0-.888.994v11.435c0 8.406 10.087 14.073 10.517 14.31a1 1 0 0 0 .966 0c.429-.236 10.517-5.903 10.517-14.31V4.131a1 1 0 0 0-.888-.994h.001ZM25 15.566c0 6.266-7.067 11.073-9 12.271-1.935-1.196-9-5.992-9-12.271V5.025l9-1.018 9 1.018v10.541Z" /><path d="M12.707 13.293a.999.999 0 1 0-1.414 1.414l3 3a.997.997 0 0 0 1.414 0l5-5a.999.999 0 1 0-1.414-1.414L15 15.586l-2.293-2.293Z" />
    </>
  ),
})
