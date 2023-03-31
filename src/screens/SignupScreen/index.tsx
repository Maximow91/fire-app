import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import {FormInput} from '../../components/FormInput';
import {LinkButton} from '../../components/LinkButton';
import {SvgIcon} from '../../components/SvgIcon';
import {RootStackParamList} from '../../navigation/Navigator';

export const SignupScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //By Signing up, you agree to the Terms of Service and Privacy Policy

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Greate an account</Text>
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
          containerStyle={styles.input}
          returnKeyType="go"
          secureTextEntry
          multiline={false}
          autoCorrect={false}
        />
        <FormInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="confirm password"
          icon={<SvgIcon name="lock" />}
          containerStyle={styles.input}
          returnKeyType="go"
          secureTextEntry
          multiline={false}
          autoCorrect={false}
        />
        <CustomButton
          onPress={() => {}}
          label="Sign Up"
          style={styles.spacerL}
        />
        <View style={styles.privacyBlock}>
          <Text>By Signing up, you agree to the </Text>
          <LinkButton label="Terms of Service" />
          <Text> and</Text>
          <LinkButton label="Privacy Policy" />
        </View>
        <CustomButton
          onPress={() => {}}
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
        <LinkButton
          label="Have an account? Sign in"
          style={styles.bottomButton}
          textStyle={styles.bottomButtonText}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededfc',
  },
  wrapper: {
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 32,
    height: '100%',
  },
  input: {
    marginTop: 32,
  },
  label: {
    fontSize: 24,
    marginTop: 10,
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
    marginTop: 54,
  },
  spacerS: {
    marginTop: 10,
  },
  privacyBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center',
  },
  privacyLinkText: {
    color: 'black',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 32,
  },
  bottomButtonText: {
    color: '#1111f5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
