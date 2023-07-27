
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisHp: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path d="M16 30h-.413l2.87-7.87h3.934c.697 0 1.457-.522 1.696-1.174l3.108-8.521c.5-1.391-.282-2.544-1.782-2.544h-5.478l-7.175 19.74C6.59 28.151 2 22.607 2 16 2 9.587 6.326 4.173 12.218 2.52l-7.131 19.61h2.956l3.783-10.414h2.24l-3.784 10.414h2.958l3.543-9.719c.5-1.39-.283-2.543-1.783-2.543h-2.5l2.87-7.846c.217 0 .413-.022.63-.022 7.74 0 14 6.26 14 14S23.74 30 16 30Zm8.478-18.282h-2.24l-3.129 8.564h2.239l3.13-8.564Z" />
  </ReactSVG.G>
  ],
})
