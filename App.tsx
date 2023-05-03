import { DefaultTheme } from '@react-navigation/native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/Screens/RootNavigation';
import { useRootStore } from './store';

const navRef = createNavigationContainerRef();

const App = () => {
  const theme = DefaultTheme;
  theme.colors.background = '#e7e6e6';
  theme.colors.text = '#000000';

  const { setNavRef } = useRootStore((state) => state);

  return (
    <NavigationContainer
      theme={theme}
      ref={navRef}
      onReady={() => setNavRef(navRef.getCurrentRoute()?.key)}
      onStateChange={() => setNavRef(navRef.getCurrentRoute()?.key)}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
