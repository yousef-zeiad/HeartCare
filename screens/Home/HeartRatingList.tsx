import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { monotoneCubicInterpolation } from '@rainbow-me/animated-charts';

import { HeartRates } from './HeartRates';
import { BackgroundIcon, Container, ScrollList } from './styled';
import { data } from '../../utils/ResistingHeartInfo';
import { HeartRatingChart } from '../../components/HeartRatingChart';
import Layout from '../../constants/Layout';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../navigation/BottomTabNavigator';
import { HomeStackParamList } from '../../navigation/HomeTab';
import { FontAwesome } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { SharedElement } from 'react-native-shared-element';
const points = monotoneCubicInterpolation({ data, range: 40 });
const chartListingdata = ["l1", "l2", "l3", "aVR"];

export type HomeNavigatorProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'HomeScreen'>,
  BottomTabNavigationProp<BottomTabParamList>
>;
type RouteProps = RouteProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  route: RouteProps;
  navigation: HomeNavigatorProp;

};

export const HeartRatingList: React.FC<Props> = ({ navigation }) => {
  return (
    <SharedElement id={'item.screen2'} style={{ flex: 1 }}>

      <Header isIcon={false}>
        <HeartRates height={false} marginBottom={false} fontSize={false} />
      </Header>

      <Container>
        <View>
          <BackgroundIcon onPress={() => navigation.goBack()}>
            <FontAwesome name="expand" size={20} color="black" />
          </BackgroundIcon>
          <ScrollList>
            {chartListingdata.map((item, index) => {
              return (
                <HeartRatingChart
                  item={item}
                  size={Layout.window.width}
                  points={points}
                  key={index}
                />
              );
            })}
          </ScrollList>
        </View>
      </Container>
    </SharedElement>
  )
}
