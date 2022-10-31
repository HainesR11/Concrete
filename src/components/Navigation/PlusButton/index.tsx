import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const ButtonPress = styled.TouchableOpacity`
  top: -20px;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  box-shadow: 5px 7px 3px #7d7d7d4d;
`;

const PlusButton = ({ children, onPress }) => {
  return (
    <ButtonPress onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
        {children}
      </LinearGradient>
    </ButtonPress>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
});

export default PlusButton;
