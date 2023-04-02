import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigation/Navigator';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {CommonStoreContext} from './src/strore/CommonStore';
import {theme} from './src/config/theme';

function App() {
  const [initializing, setInitializing] = useState<Boolean>(true);

  const commonStore = useContext(CommonStoreContext);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    commonStore.setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.mainPurple,
  },
});

export default App;
