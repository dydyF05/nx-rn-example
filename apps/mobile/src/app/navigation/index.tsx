import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { RootScreensParams } from './screens';
import { MainStackNavigator } from './stacks/Main';

const HANDLE_READY = () => {
  BootSplash.hide({ fade: true });
};

const AppNavigator = () => {
  return (
    <NavigationContainer<RootScreensParams> onReady={HANDLE_READY}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
