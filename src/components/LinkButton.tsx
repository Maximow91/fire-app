import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface LinkButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: TextStyle;
}

export const LinkButton = ({
  label,
  textStyle,
  ...otherProps
}: LinkButtonProps) => {
  return (
    <TouchableOpacity {...otherProps}>
      <Text style={[styles.labelText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: 13,
    color: '#EAAC41',
  },
});
