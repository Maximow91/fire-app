import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';

interface PaginatorProps {
  data: Array<any>;
  scrollX: Animated.Value;
  current: number;
}

export const Paginator = ({data, scrollX, current}: PaginatorProps) => {
  const w = Dimensions.get('screen').width;

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * w, index * w, (index + 1) * w];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 22, 12],
          extrapolate: 'clamp',
        });
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                backgroundColor: current === index ? 'black' : '#ccc',
                opacity: dotOpacity,
              },
            ]}
            key={item.id}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
});
