
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisArrowToSelection: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M27 24H15c-3.96 0-5-3.27-5-5v-8.59l-4.29 4.3A.996.996 0 1 1 4.3 13.3l6-6c.09-.09.2-.17.33-.22.12-.05.25-.08.38-.08s.26.03.38.08.23.12.33.22l6 6a.996.996 0 1 1-1.41 1.41l-4.29-4.29v8.57c0 .5.18 3.01 3 3.01h12c.55 0 1 .45 1 1s-.45 1-1 1H27Z" />
  </ReactSVG.G>
  ],
})
