
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisTextScale: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M30 5v3h-8v18h-3V8h-8V5h19Z" /><ReactSVG.Path d="M7 26V14H2v-2h12v2H9v12H7Z" />
  </ReactSVG.G>
  ],
})
