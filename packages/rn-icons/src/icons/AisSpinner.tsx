
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const AisSpinner: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      <ReactSVG.Path opacity=".2" d="M16 29.993c-3.585 0-7.17-1.364-9.899-4.094C.643 20.44.643 11.559 6.101 6.1l2.828 2.828c-3.898 3.899-3.898 10.243 0 14.143 3.9 3.898 10.244 3.898 14.143 0 3.898-3.899 3.898-10.243 0-14.143L25.9 6.1c5.458 5.459 5.458 14.34 0 19.799a13.956 13.956 0 0 1-9.899 4.094H16Z" /><ReactSVG.Path d="M24.485 9.515a1.99 1.99 0 0 1-1.414-.586c-3.899-3.898-10.243-3.898-14.143 0A2 2 0 1 1 6.1 6.101c5.458-5.459 14.341-5.459 19.799 0a2 2 0 0 1-1.414 3.414Z" />
  </ReactSVG.G>
  ],
})
