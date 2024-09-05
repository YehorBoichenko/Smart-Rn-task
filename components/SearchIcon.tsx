import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { styles } from '@/styles/Table.styles';

export const SearchIcon = () => (
  <Svg
    style={styles.svgIcon}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#9b9b9b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35"
    />
  </Svg>
);
