import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

import Login from '../Unauthenticated/login';
import Home from '../Authenticated/Home';
import { useRootStore } from '../../../store';
import Loading from '../Unauthenticated/Loading';
import CreateAccount from '../Unauthenticated/CreateAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideMenu from '../../components/sideMenu';

export type TStackNavigationParams = {
  Login: undefined;
  Loading: undefined;
  CreateAccount: undefined;
};

export type TAuthedStackNavigationParams = {
  Home: undefined;
};

const HeaderContiner = styled.SafeAreaView``;

const Drawer = createDrawerNavigator<TAuthedStackNavigationParams>();
const Stack = createStackNavigator<TStackNavigationParams>();

const Header = ({ navigation }: any) => {
  <HeaderContiner>
    <FontAwesomeIcon icon={faBars} />
  </HeaderContiner>;
};

const RootNavigation = () => {
  const userTokenValue = useRootStore(
    (state: { userToken: boolean }) => state.userToken,
  );
  const isLoading = useRootStore(
    (state: { isLoading: boolean }) => state.isLoading,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userTokenValue ? (
        <Drawer.Navigator
          screenOptions={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
              fontSize: 16,
              lineHeight: 24,
              fontStyle: 'normal',
            },
            header: Header(navigation),
          })}
          drawerContent={() => <SideMenu />}>
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
