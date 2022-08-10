import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const HomeContainer = styled.SafeAreaView`
  background-color: blue;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Text>Welcome home</Text>
    </HomeContainer>
  );
};
export default Home;
