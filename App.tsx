import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {AppStack} from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
