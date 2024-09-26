import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNUxcam from 'react-native-ux-cam';
import AppNavigator from './navigation';

if (__DEV__) {
  console.log('Development');
} else {
  // RNUxcam.enableAdvancedGestureRecognizers(false)
  RNUxcam.optIntoSchematicRecordings(); // Add this line to enable iOS screen recordings
  RNUxcam.startWithKey('mb9psrh4cyaw2r5'); // Add this line after RNUcam.optIntoSchematicRecordings()
}

if (__DEV__) {
  console.log('Development');
} else {
  LogBox.ignoreAllLogs(true);
}

const App = function () {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
// export default Sentry.wrap(App);
