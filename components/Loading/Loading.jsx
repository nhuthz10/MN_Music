import React, {useEffect, useRef} from 'react';
import {Text, View, Animated, Easing} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import styles from './style';

const Loading = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.container}>
      <LinearTextGradient
        colors={['#4158d0', '#c850c0', '#ffcc70']}
        locations={[0, 0.5, 1]}>
        <Text style={styles.loadingDesc}>Loading</Text>
      </LinearTextGradient>
      <Animated.View style={[styles.circle, {transform: [{rotate}]}]} />
    </View>
  );
};

export default Loading;
