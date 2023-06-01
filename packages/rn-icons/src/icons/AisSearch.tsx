
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisSearch: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="m26.707 25.293-4.969-4.969A9.954 9.954 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10c2.398 0 4.6-.85 6.324-2.262l4.969 4.969a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM14 22c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z" />
  </ReactSVG.G>
  ],
})
