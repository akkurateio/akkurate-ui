
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisHotel: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M17 14h8a5 5 0 0 1 5 5v10a1 1 0 1 1-2 0v-5H4v5a1 1 0 1 1-2 0V10a1 1 0 0 1 .53-.88l13-7a1 1 0 0 1 .94 0l12.124 6.529a.998.998 0 0 1-.945 1.757L16 4.14 4 10.6V22h11v-6a2 2 0 0 1 2-2Zm0 2v6h11v-3a3 3 0 0 0-3-3h-8Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M7.556 13.59a3.5 3.5 0 1 1 3.889 5.82 3.5 3.5 0 0 1-3.89-5.82Zm2.777 1.663a1.5 1.5 0 1 0-1.667 2.495 1.5 1.5 0 0 0 1.667-2.495Z" />
  </ReactSVG.G>
  ],
})
