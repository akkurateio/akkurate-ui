
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisSubscriber: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M14 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><ReactSVG.Path d="M11 14a5 5 0 0 0-5 5v1a1 1 0 1 0 2 0v-1a3 3 0 0 1 6 0v1a1 1 0 1 0 2 0v-1a5 5 0 0 0-5-5ZM24.293 9.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L21 12.586l3.293-3.293Z" /><ReactSVG.Path fillRule="evenodd" clipRule="evenodd" d="M30 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6.904a2 2 0 0 1 1.414.586l2.402 2.402a2 2 0 0 0 2.828 0l2.402-2.402A2 2 0 0 1 21.364 25H28a2 2 0 0 0 2-2V5ZM4 5h24v18h-6.636a4 4 0 0 0-2.828 1.172l-2.402 2.401-2.402-2.401A4 4 0 0 0 10.904 23H4V5Z" />
  </ReactSVG.G>
  ],
})
