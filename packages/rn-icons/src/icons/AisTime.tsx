
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisTime: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm0 22c-5.514 0-10-4.486-10-10S10.486 6 16 6s10 4.486 10 10-4.486 10-10 10Z" /><ReactSVG.Path d="M17 15.586V9a1 1 0 1 0-2 0v7c0 .266.105.52.293.707l3 3a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L17 15.586Z" />
  </ReactSVG.G>
  ],
})
