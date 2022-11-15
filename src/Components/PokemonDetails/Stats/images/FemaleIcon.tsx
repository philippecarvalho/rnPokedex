import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const FemaleIcon = (props: SvgProps) => (
  <Svg
    style={{
      width: 15,
      height: 15,
    }}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#FF386F"
      d="M12 4a6 6 0 0 1 6 6c0 2.97-2.16 5.44-5 5.92V18h2v2h-2v2h-2v-2H9v-2h2v-2.08c-2.84-.48-5-2.95-5-5.92a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
    />
  </Svg>
);
