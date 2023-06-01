
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisInfo: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16 3.5C9.107 3.5 3.5 9.107 3.5 16S9.107 28.5 16 28.5 28.5 22.893 28.5 16 22.893 3.5 16 3.5Zm0 23c-5.79 0-10.5-4.71-10.5-10.5S10.21 5.5 16 5.5 26.5 10.21 26.5 16 21.79 26.5 16 26.5Z" /><ReactSVG.Path d="M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21h-1v-7a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v6h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Z" />
  </ReactSVG.G>
  ],
})
