import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const LoginContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.View`
  width: 100%;
`;

const Logo = styled.Image`
  width: 400;
  height: 250;
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

const RegisterButton = styled.Button`
  margin-top: 20px;
  background-color: white;
  border: none;
  text-decoration: none;
`;

const styles = {
  gradient: {
    width: '60%',
    height: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Login = () => {
  return (
    <LoginContainer>
      <LogoContainer>
        <Logo
          source={require('../../assets/images/Concrete-logos_transparent.png')}
        />
      </LogoContainer>
      <LoginTextContainer>
        <LoginText>Log In</LoginText>
      </LoginTextContainer>
      <InputContainer>
        <InputField placeholder="Email Address" />
        <InputField placeholder="Password" secureTextEntry={true} />
      </InputContainer>
      <ButtonContainer>
        <LinearGradient
          style={styles.gradient}
          colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
          <LoginButton>Log in</LoginButton>
        </LinearGradient>
        <InputContainer>
          <Text>Or</Text>
        </InputContainer>
        <InputContainer>
          <RegisterButton title="Create Account" />
        </InputContainer>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
