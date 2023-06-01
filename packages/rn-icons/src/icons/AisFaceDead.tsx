
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisFaceDead: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M14 22a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM14.364 10.707a1 1 0 0 1 0 1.414l-1.414 1.415 1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414-1.415 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414-1.414-1.415a1 1 0 1 1 1.414-1.414l1.415 1.414 1.414-1.414a1 1 0 0 1 1.414 0ZM19.121 10.707a1 1 0 0 0-1.414 1.414l1.414 1.415-1.414 1.414a1 1 0 0 0 1.414 1.414l1.415-1.414 1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414 1.414-1.415a1 1 0 1 0-1.414-1.414l-1.415 1.414-1.414-1.414Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14Zm-2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z" />
  </ReactSVG.G>
  ],
})
