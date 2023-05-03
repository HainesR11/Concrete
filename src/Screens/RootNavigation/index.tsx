import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useRootStore, useUserStore } from '../../../store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { SideMenu, CustomHeader } from '../../components/Navigation';

import {
  Projects,
  Friends,
  Home,
  Profile,
  CreateProject,
} from '../Authenticated';
import { Login, Loading, CreateAccount } from '../Unauthenticated';
import { ProfileMock } from '../../__mocks__/ProfileMock';
import { MockProjects } from '../../__mocks__/ProjectMocks';
import { Tasks } from '../../__mocks__/TaskMocks';
import { PeopleMock } from '../../__mocks__/PeopleMocks';

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
  CreateTask: undefined;
  CreateProject: undefined;
};

const Stack = createStackNavigator<TStackNavigationParams>();
const AuthDrawer = createDrawerNavigator();
const AuthStack = createStackNavigator<TAuthedStackNavigationParams>();

const RootNavigation = () => {
  const theme = DefaultTheme;
  theme.colors.background = '#e7e6e6';
  theme.colors.text = '#000000';
  const { setUserInfo } = useUserStore((state) => state);
  const { userToken, isLoading, setDarkMode, darkMode } = useRootStore(
    (state) => state,
  );
  const userTokenValue = true;

  useEffect(() => {
    setUserInfo({
      Profile: ProfileMock,
      Projects: MockProjects,
      Tasks: Tasks,
      Friends: PeopleMock,
    });
  }, [setUserInfo]);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setDarkMode(isDarkMode);
    console.log(darkMode);
  }, [darkMode, isDarkMode, setDarkMode]);

  if (isLoading) {
    return <Loading />;
  }

  // const DrawerNavigator = () => {
  //   return (

  //   );
  // };

  return userToken ? (
    <AuthStack.Navigator
      screenOptions={{
        header: ({ navigation }) => <CustomHeader navigation={navigation} />,
      }}
      initialRouteName="Home">
      {/* TODO: change caledner component */}
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Group>
        <AuthStack.Screen name="Profile" component={Profile} />
        <AuthStack.Screen name="CreateProject" component={CreateProject} />
      </AuthStack.Group>
      <AuthStack.Screen name="Projects" component={Projects} />
      <AuthStack.Screen name="Tasks" component={Home} />
      <AuthStack.Screen name="Friends" component={Friends} />
      <AuthStack.Screen name="Calendar" component={Friends} />
    </AuthStack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
