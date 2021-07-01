import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { BpmTitle, HeartRateContainer, RateCounterContainer, RatingNumber } from './styled';

export type HeartRateTypeProp = {
  fontSize: boolean;
  marginBottom: boolean;
  height: boolean;
}
export const HeartRates: React.FC<HeartRateTypeProp> = ({ fontSize, marginBottom, height }) => {
  const [rateCounter, setRateNumber] = useState(65);
  const heartAnimation = useRef(new Animated.Value(1));
  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(heartAnimation.current, {
          useNativeDriver: true,
          toValue: 1.2,
          duration: 200,
        }),
        // decrease size
        Animated.timing(heartAnimation.current, {
          useNativeDriver: true,
          toValue: 1,
          duration: 1000,
        }),
      ])
    ).start();
    const timer = setInterval(() => setRateNumber(rateCounter < 65 ? rateCounter + 1 : rateCounter === 120 ? 65 : 0 ? rateCounter : rateCounter + 1
    ), 1000);
    return () => clearInterval(timer);

  }, [rateCounter]);

  return (
    <HeartRateContainer height={height}>
      <Animated.View style={{ transform: [{ scale: heartAnimation.current }] }}>
        <Ionicons name="md-heart-sharp" size={25} color="red" />
      </Animated.View>
      <RateCounterContainer>
        <RatingNumber fontSize={fontSize}>
          {rateCounter}
        </RatingNumber>
        <BpmTitle marginBottom={marginBottom} fontSize={fontSize}>
          BPM
        </BpmTitle>
      </RateCounterContainer>
    </HeartRateContainer >
  )
}
