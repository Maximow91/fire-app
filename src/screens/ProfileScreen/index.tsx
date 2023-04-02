import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFirebase} from '../../hooks/useFirebase';

export const ProfileScreen = () => {
  const {logout} = useFirebase();

  const logoutHandler = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>My profile screen</Text>
        <TouchableOpacity onPress={logoutHandler}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapper: {},
});
