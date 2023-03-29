import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.label}>FireApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
