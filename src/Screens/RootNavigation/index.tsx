import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRootStore } from '../../../store';
import CustomHeader from '../../components/Navigation/Header';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../../components/Navigation/sideMenu';
import { DefaultTheme } from '@react-navigation/native';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

import Projects from '../Authenticated/Projects';
import Friends from '../Authenticated/Friends';
import Home from '../Authenticated/Home';
import Profile from '../Authenticated/Profile';
import Loading from '../Unauthenticated/Loading';
import CreateAccount from '../Unauthenticated/CreateAccount';
import Login from '../Unauthenticated/login';

export type TStackNavigationParams = {
  Login: undefined;
  Loading: undefined;
  CreateAccount: undefined;
};

export type TAuthedStackNavigationParams = {
  Home: undefined;
  Tasks: undefined;
  Projects: undefined;
  Friends: undefined;
  Profile: undefined;
  Add: undefined;
};

const Stack = createStackNavigator<TStackNavigationParams>();
const AuthDrawer = createDrawerNavigator<TAuthedStackNavigationParams>();

const RootNavigation = () => {
  const theme = DefaultTheme;
  theme.colors.background = '#e7e6e6';

  const { userToken, isLoading, setNavRef } = useRootStore((state) => state);
  // const userTokenValue = true;

  const navRef = createNavigationContainerRef();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer
      theme={theme}
      ref={navRef}
      onReady={() => setNavRef(navRef.getCurrentRoute()?.key)}
      onStateChange={() => setNavRef(navRef.getCurrentRoute()?.key)}>
      {userToken ? (
        <AuthDrawer.Navigator
          screenOptions={{
            gestureHandlerProps: {
              enabled: true,
            },
            header: ({ navigation }) => (
              <CustomHeader navigation={navigation} />
            ),
          }}
          initialRouteName="Home"
          drawerContent={({ navigation }) => (
            <SideMenu navigation={navigation} />
          )}>
          {/* TODO: change home to caleneder */}
          <AuthDrawer.Screen name="Home" component={Home} />
          <AuthDrawer.Screen name="Profile" component={Profile} />
          <AuthDrawer.Screen name="Projects" component={Projects} />
          <AuthDrawer.Screen name="Tasks" component={Home} />
          <AuthDrawer.Screen name="Friends" component={Friends} />
        </AuthDrawer.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
