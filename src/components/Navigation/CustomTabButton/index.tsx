import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import {
  faCalendarDay,
  faLayerGroup,
  faListCheck,
  faPlus,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { TAuthedStackNavigationParams } from '../../../Screens/RootNavigation';
import PlusButton from '../PlusButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('screen');

const TabContainer = styled.View`
  width: ${width - 40}px;
  border-radius: 20px;
  height: ${height / 14}px;
  margin-bottom: 10px;
  display: flex;
  background-color: #f5f5f5;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 7px 3px #7d7d7d4d;
`;

const PlusContainer = styled.View`
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)``;

const TouchOpacicity = styled.TouchableOpacity``;

const CustomTabButton = () => {
  const navigation =
    useNavigation<StackNavigationProp<TAuthedStackNavigationParams>>();
  return (
    <TabContainer>
      <TouchOpacicity onPress={() => navigation.navigate('Projects')}>
        <Icon size={width / 15} icon={faListCheck} />
      </TouchOpacicity>
      <TouchOpacicity onPress={() => navigation.navigate('Calendar')}>
        <Icon size={width / 15} icon={faCalendarDay} />
      </TouchOpacicity>
      <PlusButton
        children={
          <PlusContainer>
            <Icon size={width / 14} color="white" icon={faPlus} />
          </PlusContainer>
        }
        onPress={() => {}}
      />
      <TouchOpacicity onPress={() => navigation.navigate('Friends')}>
        <Icon size={width / 15} icon={faUserGroup} />
      </TouchOpacicity>
      <TouchOpacicity onPress={() => navigation.navigate('Projects')}>
        <Icon size={width / 15} icon={faLayerGroup} />
      </TouchOpacicity>
    </TabContainer>
  );
};

export default CustomTabButton;
