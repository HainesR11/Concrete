import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { useRootStore } from '../../../../store.js';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TStackNavigationParams } from '../../RootNavigation';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import { Buffer } from 'buffer';

type TContainerProps = {
  darkMode: boolean;
};

const LoginContainer = styled.SafeAreaView<TContainerProps>`
  display: flex;
  flex-direction: column;
  color: ${(state) => (state.darkMode ? 'white' : 'black')};
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
  text-align: center;
  padding: 16px 0px;
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

const ValidatorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

type TNavigationProps = DrawerNavigationProp<TStackNavigationParams>;

const gradientStyles = {
  width: '100%',
  height: '100%',
  borderRadius: 5,
};

const Login = () => {
  // const onPress = () => {
  //   setIsLoading;
  // };
  // const setIsLoading = useRootStore(
  //   (state: { setIsLoading: boolean }) => state.setIsLoading,
  // );
  const { setUserToken, darkMode } = useRootStore((state) => state);
  const navigation = useNavigation<TNavigationProps>();
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [emailValidorText, setEmailValidorText] = useState('');

  // const TestText = () => {
  //   // Testing encoding - will later impement into onLogin Function
  //   console.log(password);
  //   const encode = Buffer.from(password, 'utf-8').toString('base64');
  //   console.log(encode);
  //   const decode = Buffer.from(encode, 'base64').toString('utf8');
  //   console.log(decode);
  // };

  const emailValidator = () => {
    // TODO: Find Suitable Validator - Potentionaly react-native-form-validator
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailValidorText('Please enter a valid Email Address ');
    } else {
      setEmailValidorText('');
      setUserToken();
    }
  };

  return (
    <LoginContainer darkMode={darkMode}>
      <LogoContainer>
        <Logo
          source={require('../../../assets/images/Concrete-logos_transparent.png')}
        />
      </LogoContainer>
      <LoginTextContainer>
        <LoginText>Log In</LoginText>
      </LoginTextContainer>
      <InputContainer>
        {emailValidorText && <ValidatorText>{emailValidorText}</ValidatorText>}
        <InputField
          placeholder="Email Address"
          onChangeText={(e: any) => setEmail(e)}
        />
        <InputField
          passwordRules={'heloo there'}
          placeholder="Password"
          // onChangeText={(e: any) => setPassword(e)}
        />
      </InputContainer>
      <ButtonContainer>
        <GradientContainer onPress={() => emailValidator()}>
          <LinearGradient
            style={[gradientStyles]}
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
