import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {theme} from '../config/theme';

interface FormInputProps extends TextInputProps {
  placeholderText?: string;
  icon?: ReactNode;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
}

export const FormInput = (props: FormInputProps) => {
  const {
    placeholderText,
    icon,
    containerStyle,
    inputContainerStyle,
    ...otherProps
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {!!icon && <View style={styles.imageContainer}>{icon}</View>}
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          !icon && {borderRadius: 8},
        ]}>
        <TextInput
          placeholder={placeholderText}
          style={styles.input}
          multiline
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    paddingStart: 6,
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 1,
    flex: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    borderColor: theme.color.borderGray,
    minHeight: 36,
    backgroundColor: theme.color.white,
  },
  imageContainer: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 6,
    borderColor: theme.color.borderGray,
    backgroundColor: theme.color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
