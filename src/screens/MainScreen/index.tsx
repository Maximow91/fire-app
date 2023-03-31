import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>My home screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapper: {},
});
