import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import {RootStackParamList} from '../../navigation/Navigator';
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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <OnboardingSlider style={styles.carousel} data={slides} />
      <View style={styles.button}>
        <CustomButton
          label="Let's go"
          onPress={() => {
            AsyncStorage.setItem('isFirstStart', 'false');
            navigation.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededfc',
  },
  carousel: {
    marginTop: 32,
  },
  button: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
});
