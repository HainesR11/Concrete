import React from 'react';
import styled from 'styled-components/native';
import { useRootStore } from '../../../../store';

const SideMenuContainer = styled.SafeAreaView``;
const SideMenuText = styled.Text``;
const LogoutButton = styled.Button``;

const SideMenu = () => {
  const setUserToken = useRootStore((state) => state.setUserToken);
  return (
    <SideMenuContainer>
      <SideMenuText>This is the side menu</SideMenuText>
      <LogoutButton title={'Logout'} onPress={() => setUserToken()} />
    </SideMenuContainer>
  );
};

export default SideMenu;
