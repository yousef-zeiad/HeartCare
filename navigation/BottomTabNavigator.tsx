/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, View } from 'react-native'
import Colors from '../constants/Colors';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { HistoryParamList, HistoryScreen } from '../screens/History/HistoryScreen';
import { HeartParamList, HeartScreen } from '../screens/HeartScreen';
import { HomeStackParamList, HomeTab } from './HomeTab';
import Routes from './Routes';
import styled from 'styled-components';
import { MedicalScreen } from '../screens/Medical/MedicalScreen';
import { AccountScreen } from '../screens/Account/AccountScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  History: undefined;
  HeartScreen: undefined;
};

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName={'HomeTab'}
      tabBarOptions={{

        activeTintColor: Colors.secondary,
        labelStyle: { marginTop: 11 }, safeAreaInsets: { bottom: 20 }, style: {
          borderTopWidth: 0,
          elevation: 0
        }

      }}>
      <BottomTab.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Routes.HeartTab}
        component={HeartScreenNavigator}
        options={{
          tabBarIcon: () => <RateCircle />,
          tabBarLabel: () => null


        }}
      />
      {/* TODO:add the screens */}
      <BottomTab.Screen
        name={Routes.MedicalTab}
        component={MedicalScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="medical-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Routes.AccountTab}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}
const RateCircleIcon = styled(Image)`
height: 30px;
width: 30px;
tint-color:#fff
`;
const RateCircleRounded = styled(View)`
background-color: #1fc49c;
border-radius: 50px;
height: 60px;
width:60px;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`;
const RateCircle = () => (<RateCircleRounded>
  <RateCircleIcon resizeMode={'contain'} source={require('../assets/images/heart-chart.png')} />
</RateCircleRounded>)
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryScreenNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerTitle: 'HistoryScreen' }}
      />
    </HistoryStack.Navigator>
  );
}

const HeartStack = createStackNavigator<HeartParamList>();

function HeartScreenNavigator() {
  return (
    <HeartStack.Navigator>
      <HeartStack.Screen
        name="HeartScreen"
        component={HeartScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </HeartStack.Navigator>
  );
}
