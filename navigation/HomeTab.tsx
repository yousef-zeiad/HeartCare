import React from 'react';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { HeartRatingList } from '../screens/Home/HeartRatingList';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const HomeStack = createSharedElementStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
  HomeScreen: undefined;
  HeartRatingList: undefined;
};
export const HomeTab: React.FC = () => (
  <HomeStack.Navigator
    initialRouteName="HomeScreen"
    mode="modal"
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleAllowFontScaling: true,
      animationTypeForReplace: 'pop',
      cardStyle: { backgroundColor: 'transparent' },
    }}>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="HeartRatingList"
      component={HeartRatingList}
      sharedElementsConfig={(route, otherRoute, showing) => {
        if (otherRoute.name === 'HeartRatingList' && showing) {
          return [`item.screen2`]
        }
      }}
      options={{ headerShown: false }}

    />
  </HomeStack.Navigator>

)
