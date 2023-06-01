
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisSuitcase: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M11 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h5a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h5Zm2-2h6v2h-6V5Zm-2 20H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h5v16Zm2 0V9h6v16h-6Zm8 0h5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-5v16Z" />
  </ReactSVG.G>
  ],
})
