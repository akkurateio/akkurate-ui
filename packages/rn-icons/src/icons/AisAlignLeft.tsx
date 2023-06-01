
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisAlignLeft: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M4 5a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2H4Zm0 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H4Zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H4Zm-1 5a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H4Z" />
  </ReactSVG.G>
  ],
})
