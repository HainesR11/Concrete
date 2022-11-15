import React, { useEffect } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRootStore } from '../../../store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { SideMenu, CustomHeader } from '../../components/Navigation';

import { Projects, Friends, Home, Profile } from '../Authenticated';
import { Login, Loading, CreateAccount } from '../Unauthenticated';

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
  Calendar: undefined;
};

const Stack = createStackNavigator<TStackNavigationParams>();
const AuthDrawer = createDrawerNavigator<TAuthedStackNavigationParams>();

const RootNavigation = () => {
  const theme = DefaultTheme;
  theme.colors.background = '#e7e6e6';
  const { userToken, isLoading, setNavRef, setDarkMode, darkMode } =
    useRootStore((state) => state);
  const userTokenValue = true;

  const navRef = createNavigationContainerRef();

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setDarkMode(isDarkMode);
    console.log(darkMode);
  }, [darkMode, isDarkMode, setDarkMode]);

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
          {/* TODO: change caledner component */}
          <AuthDrawer.Screen name="Home" component={Home} />
          <AuthDrawer.Group>
            <AuthDrawer.Screen
              options={{
                drawerItemStyle: { display: 'none' },
              }}
              name="Profile"
              component={Profile}
            />
          </AuthDrawer.Group>
          <AuthDrawer.Screen name="Projects" component={Projects} />
          <AuthDrawer.Screen name="Tasks" component={Home} />
          <AuthDrawer.Screen name="Friends" component={Friends} />
          <AuthDrawer.Screen name="Calendar" component={Friends} />
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
