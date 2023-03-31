import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigation/Navigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
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
