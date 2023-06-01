
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisTag: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M8 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M18.586 4.586A2 2 0 0 0 17.172 4H6a2 2 0 0 0-2 2v11.172a2 2 0 0 0 .586 1.414l10.5 10.5a2 2 0 0 0 2.828 0l11.172-11.172a2 2 0 0 0 0-2.828l-10.5-10.5ZM6 6h11.172l10.5 10.5L16.5 27.672 6 17.172V6Z" />
  </ReactSVG.G>
  ],
})
