
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisMcDonalds: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M22.117 5.507c2.41 0 4.366 10.166 4.366 22.724H30C30 14.712 26.451 3.77 22.106 3.77c-2.481 0-4.675 3.278-6.122 8.431C14.536 7.048 12.342 3.77 9.88 3.77 5.536 3.769 2 14.703 2 28.222h3.516c0-12.557 1.935-22.715 4.345-22.715 2.41 0 4.364 9.392 4.364 20.977h3.497c0-11.585 1.965-20.977 4.375-20.977h.02Z" />
  </ReactSVG.G>
  ],
})
