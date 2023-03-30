import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LoginScreen} from './src/screens/LoginScreen';
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {SignupScreen} from './src/screens/SignupScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededfc',
  },
});

export default App;
