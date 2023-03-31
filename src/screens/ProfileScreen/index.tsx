import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>My profile screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapper: {},
});
