import React from 'react';
import styled from 'styled-components/native';
import { useRootStore } from '../../../../store';
import { faClose, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions } from 'react-native';
import { Profile } from '../../../__mocks__/ProfileMock';
import { DrawerActions } from '@react-navigation/native';
import { ColorPalette } from '../../ColorScheme';
import { SideMenuButton } from '../../Button';
import Seperator from '../../Seperator';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const { height, width } = Dimensions.get('screen');

const SideMenuContainer = styled.View`
  height: ${height}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  z-index: 105;
`;
const LogoutButton = styled.Button``;

const ProfileView = styled.View`
  display: flex;
  background-color: ${ColorPalette.Blue.Main};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-content: space-around;
  height: ${height / 2.5}px;
  padding-left: 20px;
`;

const TextContainer = styled.View``;

const ButtonContainer = styled.View`
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfilePicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const PictureContainer = styled.View`
  background-color: ${ColorPalette.Blue.Profile};
  width: ${width / 3.5}px;
  height: ${width / 3.5}px;
  border-radius: 20px;
  diplay: flex;
  justify-content: center;
  align-items: center;
`;

const NameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const EmialText = styled.Text`
  font-size: 10px;
  padding-top: 10px;
  font-weight: 500;
  color: white;
`;
const CloseContainer = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
`;

const HelpContainer = styled.View`
  height: ${height / 6}px;
  display: flex;
  justify-content: space-around;
`;

const HelpIconContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-left: 25%;
`;

const HelpText = styled.Text`
  font-size: 15px;
  padding-left: 15px;
`;

const Icon = styled(FontAwesomeIcon)``;

const SideMenu = ({ navigation }) => {
  const image = require('../../../assets/images/Profile.png');
  const setUserToken = useRootStore((state) => state.setUserToken);
  const route = navigation.getState().routes;
  const newRoutes = route.filter(
    (routeName: any) => routeName.name !== 'Profile',
  );
  const navState = useRootStore((state) => state.navRef);

  // const route = '';

  return (
    <SideMenuContainer>
      <ProfileView>
        <CloseContainer
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Icon size={20} color={'black'} icon={faClose} />
        </CloseContainer>
        {image ? (
          <PictureContainer>
            <ProfilePicture source={image} />
          </PictureContainer>
        ) : (
          <PictureContainer>
            <Icon size={50} color={'white'} icon={faUser} />
          </PictureContainer>
        )}
        <TextContainer>
          <NameText>{Profile.Name}</NameText>
          <EmialText>{Profile.Email}</EmialText>
        </TextContainer>
      </ProfileView>
      <ButtonContainer>
        {newRoutes.map((key: { name: string; key: string }, name: number) => {
          console.log(key.name);
          console.log(key.key);
          return (
            <SideMenuButton
              title={key.name}
              key={name}
              navKey={key.key}
              route={navState}
              navigation={navigation}
              width={width / 2}
              height={height / 20}
            />
          );
        })}
      </ButtonContainer>
      <HelpContainer>
        <Seperator />
        <HelpIconContainer>
          <Icon size={25} icon={faUserPlus} />
          <HelpText>Invite Friends</HelpText>
        </HelpIconContainer>
        <HelpIconContainer>
          <Icon size={25} icon={faQuestionCircle} />
          <HelpText>Tutorial</HelpText>
        </HelpIconContainer>
        <LogoutButton title={'Sign Out'} onPress={() => setUserToken()} />
      </HelpContainer>
    </SideMenuContainer>
  );
};

export default SideMenu;
