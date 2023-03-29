import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppLogo} from '../../components/AppLogo';
import {FormButton} from '../../components/FormButton';
import {FormInput} from '../../components/FormInput';
import {SvgIcon} from '../../components/SvgIcon';

export const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AppLogo />
        <FormInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="email"
          icon={<SvgIcon name="user" />}
          containerStyle={styles.spacerL}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="password"
          icon={<SvgIcon name="lock" />}
          containerStyle={styles.spacerL}
          returnKeyType="go"
          secureTextEntry
          multiline={false}
          autoCorrect={false}
        />
        <FormButton onPress={() => {}} label="Sign In" style={styles.spacerL} />
        <FormButton
          onPress={() => {}}
          label="Forgot Password?"
          style={styles.linkButton}
          textStyle={styles.linkButtonText}
        />
        <FormButton
          onPress={() => {}}
          label="Sign In with Google"
          style={styles.spacerL}
          icon={<SvgIcon name="google" />}
        />
        <FormButton
          onPress={() => {}}
          label="Sign In with Facebook"
          style={styles.spacerS}
          icon={<SvgIcon name="google" />}
        />
        <FormButton
          onPress={() => {}}
          label="Don't have account? Create here"
          style={styles.linkButton}
          textStyle={styles.linkButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapper: {
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 32,
  },
  linkButton: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  linkButtonText: {
    color: 'blue',
    fontWeight: '600',
  },
  spacerL: {
    marginTop: 32,
  },
  spacerS: {
    marginTop: 10,
  },
});
