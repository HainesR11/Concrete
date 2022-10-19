import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Unauthenticated/login';
import Home from '../Authenticated/Home';
import { useRootStore } from '../../../store';
import Loading from '../Unauthenticated/Loading';
import CreateAccount from '../Unauthenticated/CreateAccount';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Projects from '../../Screens/Authenticated/Projects';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  faHouseChimney,
  faLayerGroup,
  faListCheck,
  faPlus,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import CustomTabButton from '../../components/CustomTabButton';
import Drawer from '@react-navigation/drawer'

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
};

const Stack = createStackNavigator<TStackNavigationParams>();

// const Header = ({ navigation }: any) => {
//   <HeaderContiner>
//     <FontAwesomeIcon icon={faBars} />
//   </HeaderContiner>;
// };

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

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {userTokenValue ? (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              borderRadius: 15,
              height: 50,
              shadowColor: '#7d7d7d4d',
              shadowOpacity: 3,
              shadowOffset: { width: 5, height: 7 },
            },
          }}
          initialRouteName="Home">
          <Tab.Screen
            name="Tasks"
            component={Home}
            options={{
              tabBarIconStyle: {
                marginTop: 40,
              },
              tabBarIcon: () => {
                return <FontAwesomeIcon size={25} icon={faListCheck} />;
              },
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIconStyle: {
                marginTop: 40,
              },
              tabBarIcon: () => {
                return <FontAwesomeIcon size={25} icon={faHouseChimney} />;
              },
            }}
          />
          <Tab.Screen
            name="Add"
            component={Home}
            options={{
              tabBarIcon: () => {
                return <FontAwesomeIcon color="white" icon={faPlus} />;
              },
              tabBarButton: (props) => {
                return (
                  <CustomTabButton
                    children={props.children}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Friends"
            component={Home}
            options={{
              tabBarIconStyle: {
                marginTop: 40,
              },
              tabBarIcon: () => {
                return <FontAwesomeIcon size={25} icon={faUserGroup} />;
              },
            }}
          />
          <Tab.Screen
            name="Projects"
            component={Projects}
            options={{
              tabBarIconStyle: {
                marginTop: 40,
              },
              tabBarIcon: () => {
                return <FontAwesomeIcon size={25} icon={faLayerGroup} />;
              },
            }}
          />
        </Tab.Navigator>
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
