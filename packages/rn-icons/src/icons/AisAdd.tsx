
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisAdd: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M25 15h-8V7a1 1 0 0 0-2 0v8H7a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2Z" />
  </ReactSVG.G>
  ],
})
