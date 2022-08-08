import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Unauthenticated/login';
import Home from '../Authenticated/Home';
import {useRootStore} from '../../../store';
import Loading from '../Unauthenticated/Loading';
import CreateAccount from '../Unauthenticated/CreateAccount';

export type TStackNavigationParams = {
  Login: undefined;
  Loading: undefined;
  CreateAccount: undefined;
};

export type TAuthedStackNavigationParams = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<TAuthedStackNavigationParams>();
const Stack = createStackNavigator<TStackNavigationParams>();

const RootNavigation = () => {
  const userTokenValue = useRootStore(state => state.userToken);
  const isLoading = useRootStore(state => state.isLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userTokenValue ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
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
