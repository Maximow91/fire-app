import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const logoutHandler = async () => {
    await auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('LoginScreen');
      });
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
