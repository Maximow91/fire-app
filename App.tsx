import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigation/Navigator';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {CommonStoreContext} from './src/strore/CommonStore';

function App() {
  const [initializing, setInitializing] = useState<Boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

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
      <Navigator user={user} />
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
