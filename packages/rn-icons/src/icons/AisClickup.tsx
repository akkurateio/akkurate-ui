
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisClickup: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="m4 23.512 4.305-3.3c2.288 2.988 4.718 4.363 7.424 4.363 2.691 0 5.051-1.36 7.236-4.321l4.368 3.218C24.181 27.742 20.265 30 15.73 30 11.207 30 7.252 27.758 4 23.512ZM15.713 9.175l-7.662 6.603-3.542-4.106L15.73 2l11.133 9.679-3.558 4.094-7.593-6.598Z" />
  </ReactSVG.G>
  ],
})
