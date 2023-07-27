
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisAdobe: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="m18.294 28.79-1.972-4.995h-4.846l4.54-10.668 6.606 15.662h-4.328ZM12.364 4H2v24.79L12.365 4ZM30 4H19.635L30 28.79V4Z" />
  </ReactSVG.G>
  ],
})
