
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisElevator: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M19.973 4.77a1 1 0 0 0-1.946.459l2.655 11.287a2.98 2.98 0 0 0-1.3-.492 2.008 2.008 0 0 0-.071-.55l-1.105-4.053A6 6 0 0 0 12.417 7h-1.171a2 2 0 0 0-1.982 1.73l-.954 7c-.013.09-.019.181-.02.27H5a3 3 0 0 0-3 3v2c0 .892.39 1.693 1.007 2.243a4 4 0 0 0 7.867.757h3.252a4.002 4.002 0 1 0 7.728-2.074c.02-.063.04-.128.056-.193l.117.496a1 1 0 0 0 1.215.741l6-1.5a1 1 0 1 0-.485-1.94l-5.016 1.254L19.973 4.77ZM12.417 9h-1.171l-.955 7h7.09l-1.105-4.053A4 4 0 0 0 12.417 9Zm-2.126 9H19a1 1 0 0 1 1 1v.535A4.002 4.002 0 0 0 14.126 22h-3.252A4.002 4.002 0 0 0 4 20.354V19a1 1 0 0 1 1-1h5.291ZM5 23a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </ReactSVG.G>
  ],
})
