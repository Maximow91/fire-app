import React from 'react';
import {ViewStyle} from 'react-native';
import Svg from 'react-native-svg';
import {IconName, svgIcons} from '../../assets/images/svgIcons';

import {theme} from '../config/theme';

type SvgIconProps = {
  name: IconName;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

export const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  color = theme.color.primaryDark,
  size = 24,
  style,
}) => {
  //

  return (
    <Svg
      style={style}
      viewBox={svgIcons[name].viewBox}
      width={size}
      height={size}
      stroke={svgIcons[name].types.includes('stroke') ? color : 'none'}
      fill={svgIcons[name].types.includes('fill') ? color : 'none'}>
      {svgIcons[name].path}
    </Svg>
  );
};
