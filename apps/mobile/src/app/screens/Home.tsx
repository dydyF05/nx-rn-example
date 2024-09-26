import { theme } from '@example/mobile-ui-shared';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenNavParam } from '../navigation/screens';

export const HomeScreen: FunctionComponent<ScreenNavParam<'Home'>> = () => {
  return (
    <View style={styles.screen}>
      <Text>Example app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.jams.grey.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
