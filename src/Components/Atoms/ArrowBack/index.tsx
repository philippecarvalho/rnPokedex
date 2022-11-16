import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowBack = (props: SvgProps) => (
  <Svg
    style={{ marginLeft: 10 }}
    width={24}
    height={24}
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
);
