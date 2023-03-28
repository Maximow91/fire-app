import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';
import {Paginator} from '../../../components/Paginaror/Paginator';
import {Slide} from '../../../types/types';
import {SliderItem} from '../SliderItem/SliderItem';

interface OnboardingSliderProps {
  data: Array<Slide>;
  style?: ViewStyle;
}

export const OnboardingSlider = (props: OnboardingSliderProps) => {
  const {data, style} = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
    </>
  );
};
