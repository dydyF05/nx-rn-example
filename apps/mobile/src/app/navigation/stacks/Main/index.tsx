import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../../../screens/Home';
import { Screens } from './screens';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={Screens.Home}>
      <MainStack.Screen name={Screens.Home} component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export * from './screens';
