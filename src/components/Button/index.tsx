import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useRootStore, useUserStore } from '../../../store';
import { TPaletteSubMap } from '../ColorScheme';
import LinearGradient from 'react-native-linear-gradient';

type TContainerProps = {
  width: number;
  height: number;
  color: TPaletteSubMap;
  selected: boolean;
};

type TRouteProps = {
  key: string;
  name: string;
  params: undefined;
};

type TSideMenuProps = {
  width: number;
  height: number;
  title: string;
  route: string;
  navKey: string;
  navigation: any;
};

type TTextProps = {
  selected: string;
};

const SideButtonTitleText = styled.Text<TTextProps>`
  font-size: 17px;
  font-weight: 700;
  color: ${(state) => (state.selected ? 'white' : 'black')};
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity<TContainerProps>`
  width: ${(state) => state.width}px;
  height: ${(state) => state.height}px;
  background-color: ${(state) =>
    state.selected ? state.color : 'transparent'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 1s;
`;

export const SideMenuButton = ({
  width,
  navKey,
  height,
  title,
  navigation,
}: TSideMenuProps) => {
  const { navRef } = useRootStore((state) => state);
  const { color } = useUserStore((state) => state);
  const [selected, setSelected] = useState(navKey === navRef);
  useEffect(() => {
    setSelected(navKey === navRef);
  }, [navKey, navRef]);
  return (
    <ButtonContainer
      color={color.Profile}
      selected={selected}
      width={width}
      height={height}
      onPress={() => navigation.navigate(title)}>
      <SideButtonTitleText selected={selected}>{title}</SideButtonTitleText>
    </ButtonContainer>
  );
};

const GradientContainer = styled.TouchableOpacity`
  width: 60%;
  height: 25%;
`;

const LoginButton = styled.Text`
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 5% 0px;
`;

const stylesGradient = {
  width: '100%',
  height: '100%',
  borderRadius: 5,
};

export const GradientButton = ({ fucntion, text }) => {
  return (
    <GradientContainer onPress={() => fucntion}>
      <LinearGradient
        style={stylesGradient}
        colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
        <LoginButton>{text}</LoginButton>
      </LinearGradient>
    </GradientContainer>
  );
};
