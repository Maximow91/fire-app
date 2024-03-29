import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {AppLogo} from '../../components/AppLogo';
import {CustomButton} from '../../components/CustomButton';
import {FormInput} from '../../components/FormInput';
import {LinkButton} from '../../components/LinkButton';
import {SvgIcon} from '../../components/SvgIcon';
import {theme} from '../../config/theme';
import {RootStackParamList} from '../../navigation/Navigator';
import {useFirebase} from '../../hooks/useFirebase';

export const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {login, googleLogin} = useFirebase();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const loginHandler = () => {
    login(email, password);
  };

  const loginWithGoogleHandler = () => {
    googleLogin();
  };

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
        <CustomButton
          onPress={loginHandler}
          label="Sign In"
          style={styles.spacerL}
        />
        <LinkButton
          onPress={() => {}}
          label="Forgot Password?"
          style={styles.forgotPassword}
          textStyle={styles.bottomButtonText}
        />
        {Platform.OS === 'android' ? (
          <>
            <CustomButton
              onPress={loginWithGoogleHandler}
              label="Sign In with Google"
              style={styles.spacerL}
              icon={<SvgIcon name="google" />}
            />
            <CustomButton
              onPress={() => {}}
              label="Sign In with Facebook"
              style={styles.spacerS}
              icon={<SvgIcon name="google" />}
            />
          </>
        ) : null}

        <LinkButton
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          label="Don't have account? Create here"
          style={styles.bottomButton}
          textStyle={styles.bottomButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.mainPurple,
  },
  wrapper: {
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 32,
    height: '100%',
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
  bottomButton: {
    position: 'absolute',
    bottom: 32,
  },
  forgotPassword: {
    marginTop: 16,
  },
  bottomButtonText: {
    color: '#1111f5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
