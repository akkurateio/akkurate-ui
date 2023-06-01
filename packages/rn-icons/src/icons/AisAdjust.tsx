
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisAdjust: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M3 12h15.126a4.002 4.002 0 0 0 7.748 0H29a1 1 0 1 0 0-2h-3.126a4.002 4.002 0 0 0-7.748 0H3a1 1 0 1 0 0 2Zm20.937-.498.13-.502-.13-.502a2.002 2.002 0 0 0-3.874 0l-.13.502.13.502a2.002 2.002 0 0 0 3.874 0ZM29 22H13.874a4.002 4.002 0 0 1-7.748 0H3a1 1 0 1 1 0-2h3.126a4.002 4.002 0 0 1 7.748 0H29a1 1 0 1 1 0 2Zm-20.937-.498L7.933 21l.13-.502a2.002 2.002 0 0 1 3.874 0l.13.502-.13.502a2.002 2.002 0 0 1-3.874 0Z" />
  </ReactSVG.G>
  ],
})
