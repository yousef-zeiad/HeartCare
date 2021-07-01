import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { Header } from '../../components/Header';
import { BottomTabParamList } from '../../navigation/BottomTabNavigator';
import { HomeStackParamList } from '../../navigation/HomeTab';
import { AnimatedChart } from './AnimatedChart';
import { HeartRates } from './HeartRates';
import { Container, LeadTabs, RawView } from './styled';


export type HomeNavigatorProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'HomeScreen'>,
  BottomTabNavigationProp<BottomTabParamList>
>;
type RouteProps = RouteProp<HomeStackParamList, 'HomeScreen'>;

type Props = {
  route: RouteProps;
  navigation: HomeNavigatorProp;
};
export const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <>
      <Header isIcon={true} />
      <Container>
        <HeartRates height marginBottom fontSize />
        <AnimatedChart onPress={() => navigation.navigate('HeartRatingList')} />
        <RawView>
          <LeadTabs isActive={true} number={1} />
          <LeadTabs isActive={false} number={2} />
          <LeadTabs isActive={false} number={3} />
        </RawView>
      </Container>
    </>
  )
}
