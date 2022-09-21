import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { useRootStore } from '../../../../store.js';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TStackNavigationParams } from '../../RootNavigation';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Buffer } from 'buffer';

const LoginContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.View`
  width: 100%;
`;

const Logo = styled.Image`
  width: 400px;
  height: 250px;
`;

const InputContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const InputField = styled.TextInput`
  border-bottom-color: grey;
  border-bottom-width: 1.5px;
  width: 300px;
  margin-bottom: 20px;
  padding: 10px 0px;
`;
const LoginTextContainer = styled.View`
  align-items: center;
  padding-bottom: 30px;
`;

const LoginText = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: black;
`;

const LoginButton = styled.Text`
  text-decoration: none;
  color: white;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`;

const Text = styled.Text`
  color: black;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: #d9d9d9;
  padding: 20px 70px;
`;

const GradientContainer = styled.TouchableOpacity`
  width: 60%;
  height: 20%;
`;

type TNavigationProps = DrawerNavigationProp<TStackNavigationParams>;

const Login = () => {
  // const onPress = () => {
  //   setIsLoading;
  // };
  // const setIsLoading = useRootStore(
  //   (state: { setIsLoading: boolean }) => state.setIsLoading,
  // );
  const setUserToken = useRootStore((state) => state.setUserToken);
  const navigation = useNavigation<TNavigationProps>();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState('');

  const TestText = () => {
    console.log(password);
    const encode = Buffer.from(password, 'utf-8').toString('base64');
    console.log(encode);
    const decode = Buffer.from(encode, 'base64').toString('utf8');
    console.log(decode);
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo
          source={require('../../../assets/images/Concrete-logos_transparent.png')}
        />
      </LogoContainer>
      <LoginTextContainer>
        <LoginText>Log In</LoginText>
      </LoginTextContainer>
      <InputContainer>
        <InputField
          placeholder="Email Address"
          onChangeText={(e: any) => setUsername(e)}
        />
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(e: any) => setPassword(e)}
        />
      </InputContainer>
      <ButtonContainer>
        <GradientContainer onPress={() => TestText()}>
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
            <LoginButton>Log in</LoginButton>
          </LinearGradient>
        </GradientContainer>
        <InputContainer>
          <Text>Or</Text>
        </InputContainer>
        <InputContainer>
          <RegisterButton onPress={() => navigation.navigate('CreateAccount')}>
            <Text>Create Account</Text>
          </RegisterButton>
        </InputContainer>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
