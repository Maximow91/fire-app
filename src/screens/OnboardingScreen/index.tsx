import React from 'react';
import {StyleSheet, View} from 'react-native';
import {OnboardingSlider} from './OnboardingSlider/OnboardingSlider';

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/blog.png'),
    content: 'Add your posts',
  },
  {
    id: '2',
    image: require('../../../assets/images/letter.png'),
    content: 'Chart with other people',
  },
  {
    id: '3',
    image: require('../../../assets/images/support.png'),
    content: 'Take notifications',
  },
];

export const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <OnboardingSlider style={styles.carousel} data={slides} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  carousel: {
    marginTop: 32,
  },
});
