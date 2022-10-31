import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useRootStore, useUserStore } from '../../../store';
import { TPaletteSubMap } from '../ColorScheme';

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

const SideButtonTitleText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity<TContainerProps>`
  width: ${(state) => state.width};
  height: ${(state) => state.height};
  background-color: ${(state) =>
    state.selected ? state.color : 'transparent'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <SideButtonTitleText>{title}</SideButtonTitleText>
    </ButtonContainer>
  );
};
