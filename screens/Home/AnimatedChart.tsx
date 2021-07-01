import { FontAwesome } from '@expo/vector-icons';
// @ts-ignore
import { ChartPath, ChartPathProvider, monotoneCubicInterpolation } from '@rainbow-me/animated-charts';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { SharedElement } from 'react-native-shared-element';

import Layout from '../../constants/Layout';
import { data } from '../../utils/ResistingHeartInfo';
import { AnimatiedChart, BackgroundIcon } from './styled';
const points = monotoneCubicInterpolation({ data, range: 40 });

export type AnimatedChartTypeProp = {
  onPress: () => void;
}
export const AnimatedChart: React.FC<AnimatedChartTypeProp> = ({ onPress }) => {
  const route = useRoute();
  const [startValue] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.timing(
        startValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false
      }
      )).start();
  }, [])


  const marginLeft = startValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Layout.window.width]
  })

  return (
    <SharedElement id={'item.screen2'}>
      <ChartPathProvider
        data={{
          points,
          smoothingStrategy: "bezier"
        }}
      >
        <AnimatiedChart>
          <BackgroundIcon activeOpacity={0.7} onPress={onPress}>
            <FontAwesome name="expand" size={20} color="black" />
          </BackgroundIcon>
          <Animated.View
            style={{
              marginLeft,
              height: 200,
              width: 8,
              backgroundColor: '#FDFCFD',
              zIndex: 1,
              position: 'absolute',
            }} />
          <ChartPath
            height={Layout.window.width / 2}
            stroke="black"
            width={Layout.window.width}
            strokeWidth={5}
          />
        </AnimatiedChart>

      </ChartPathProvider>
    </SharedElement>
  )
}
