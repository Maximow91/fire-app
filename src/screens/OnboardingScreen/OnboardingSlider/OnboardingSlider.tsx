import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {CustomButton} from '../../../components/CustomButton';
import {Paginator} from '../../../components/Paginator';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Slide} from '../../../types/types';
import {SliderItem} from '../SliderItem/SliderItem';

interface OnboardingSliderProps {
  data: Array<Slide>;
  style?: ViewStyle;
}

export const OnboardingSlider = (props: OnboardingSliderProps) => {
  const {data, style} = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  console.log(currentIndex);

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: false},
    )(e);
  };

  const viewablesChangeHandler = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <>
      <FlatList
        data={data}
        horizontal
        style={style}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
        onViewableItemsChanged={viewablesChangeHandler}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <SliderItem image={item.image} textContent={item.content} />;
        }}
      />
      <Paginator data={data} scrollX={scrollX} current={currentIndex} />
      <View style={styles.button}>
        {currentIndex === 2 && (
          <CustomButton
            label="Let's go"
            onPress={() => {
              AsyncStorage.setItem('isFirstStart', 'false');
              navigation.navigate('LoginScreen');
            }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingHorizontal: 16,
    minHeight: 40,
  },
});
