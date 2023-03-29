import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {theme} from '../config/theme';

interface FormButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  icon?: ReactNode;
  textStyle?: TextStyle;
}

export const FormButton = (props: FormButtonProps) => {
  const {label, onPress, icon, style, textStyle, ...otherProps} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...otherProps}>
      <View style={styles.content}>
        {!!icon && icon}
        <Text
          style={[styles.labelText, textStyle, !!icon && {marginStart: 10}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 6,
    width: '100%',
  },
  labelText: {
    fontSize: 16,
    color: theme.color.white,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
