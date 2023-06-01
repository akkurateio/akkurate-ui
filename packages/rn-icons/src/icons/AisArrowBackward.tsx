
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisArrowBackward: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M24 14.992c0-3.96-3.27-5-5-5h-8.59l4.3-4.29a.996.996 0 1 0-1.41-1.41l-6 6c-.09.09-.17.2-.22.33-.05.12-.08.25-.08.38s.03.26.08.38.12.23.22.33l6 6a.996.996 0 1 0 1.41-1.41l-4.29-4.29h8.57c.5 0 3.01.18 3.01 3v12c0 .55.45 1 1 1s1-.45 1-1v-12.02Z" />
  </ReactSVG.G>
  ],
})
