import React from 'react';
import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

// const spinnerAnimation = new Keyframe({
//   0: {
//     rotation: 0,
//   },
//   25: {
//     rotation: 90,
//   },
//   50: {
//     rotation: 180,
//   },
//   75: {
//     rotation: 270,
//   },
//   100: {
//     rotation: 360,
//   },
// });

const LoadingContainer = styled.SafeAreaView``;

const ImageContainer = styled.View`
  display: flex;
`;
const Logo = styled.Image`
  width: 400px;
  height: 250px;
`;

const SpinnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: 4s;
  animation
`;

const SpinnerText = styled.Text`
  top: -115;
  left: 150;
  font-size: 23px;
  color: black;
`;

const GradientBackground = styled.View`
  width: 170;
  height: 170;
  border-radius: 100;
  background-color: white;
  margin-top: 9.5px;
  margin-left: 9.5px;
`;

const Loading = () => {
  const rotateAnim = new Animated.Value(0);
  const startAnimation = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      startAnimation();
    });
  };

  useEffect(() => {
    startAnimation();
  });

  return (
    <LoadingContainer>
      <ImageContainer>
        <Logo
          source={require('../../../assets/images/Concrete-logos_transparent.png')}
        />
      </ImageContainer>
      <SpinnerContainer>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          <LinearGradient
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              padding: 5,
            }}
            colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
            <GradientBackground />
          </LinearGradient>
        </Animated.View>
      </SpinnerContainer>
      <SpinnerText>Loading...</SpinnerText>
    </LoadingContainer>
  );
};

export default Loading;
