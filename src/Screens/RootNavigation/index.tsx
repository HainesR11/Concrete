import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Unauthenticated/login';
import { useRootStore } from '../../../store';
import Loading from '../Unauthenticated/Loading';
import CreateAccount from '../Unauthenticated/CreateAccount';
import CustomTabButton from '../../components/Navigation/CustomTabButton';
import CustomHeader from '../../components/Navigation/Header';
import Header from '../../components/Navigation/Header';
import Home from '../Authenticated/Home';
import Projects from '../Authenticated/Projects';
import Profile from '../Authenticated/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../../components/Navigation/sideMenu';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

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
  const userTokenValue = useRootStore(
    (state: { userToken: boolean }) => state.userToken,
  );
  // const userTokenValue = true;
  const isLoading = useRootStore(
    (state: { isLoading: boolean }) => state.isLoading,
  );

  if (isLoading) {
    return <Loading />;
  }

  return userTokenValue ? (
    <NavigationContainer>
      <AuthDrawer.Navigator
        screenOptions={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} />,
        }}
        initialRouteName="Home"
        drawerContent={() => <SideMenu />}>
        <AuthDrawer.Screen name="Home" component={CustomTabButton} />
        <AuthDrawer.Screen name="Profile" component={Profile} />
      </AuthDrawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
