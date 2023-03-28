import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface SliderItemProps {
  image: ImageSourcePropType;
  textContent: string;
}

export const SliderItem = ({image, textContent}: SliderItemProps) => {
  const width = Dimensions.get('window').width;
  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.text}>{textContent}</Text>
      <Image source={image} resizeMode="contain" style={{width: width - 32}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '64%',
  },
  text: {
    fontSize: 24,
    color: 'gray',
  },
});
