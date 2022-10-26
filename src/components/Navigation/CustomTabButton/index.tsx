import React from 'react';
import Home from '../../../Screens/Authenticated/Home';
import Projects from '../../../Screens/Authenticated/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  faHouseChimney,
  faLayerGroup,
  faListCheck,
  faPlus,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { TAuthedStackNavigationParams } from '../../../Screens/RootNavigation';
import PlusButton from '../PlusButton';

const CustomTabButton = () => {
  const Tab = createBottomTabNavigator<TAuthedStackNavigationParams>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
            return <PlusButton children={props.children} onPress={() => {}} />;
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
  );
};

export default CustomTabButton;
