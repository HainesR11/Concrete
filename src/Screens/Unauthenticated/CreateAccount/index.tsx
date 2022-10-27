import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRootStore } from '../../../../store.js';
import { useNavigation } from '@react-navigation/native';
import { TStackNavigationParams } from '../../RootNavigation';

type TTextInputProps = {
  width: number;
  marginRight?: number;
};

type TNavigationProps = DrawerNavigationProp<TStackNavigationParams>;

const windowWidth = Dimensions.get('window').width;

const CreateContrainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 20px;
`;
const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const HomeText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  align-items: flex-end;
  text-align: center;
  color: black;
  margin: 50px 0;
`;
const ImageContainer = styled.View`
  display: flex;
`;
const Logo = styled.Image`
  width: 200;
  height: 100;
`;
const Input = styled.TextInput<TTextInputProps>`
  border-width: 2px;
  border-color: black;
  height: 40px;
  border-radius: 10px;
  padding-left:  10px
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight}%;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

const GradientContainer = styled.TouchableOpacity`
  width: 60%;
  height: 20%;
`;
const LoginButton = styled.Text`
  text-decoration: none;
  color: white;
`;

const LoginText = styled.Text`
  margin-top: 20px;
  color: grey;
`;

const stylesGradient = {
  width: '100%',
  height: '100%',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
};

const CreateAccount = () => {
  const setIsLoading = useRootStore((state) => state.setIsLoading);
  const navigation = useNavigation<TNavigationProps>();

  return (
    <CreateContrainer>
      <ImageContainer>
        <Logo
          source={require('../../../assets/images/Concrete-logos_transparent.png')}
        />
      </ImageContainer>
      <HomeText>Create account</HomeText>
      <InputContainer>
        <NameContainer>
          <Input placeholder="First Name" width={170} marginRight={3} />
          <Input placeholder="Last Name" width={170} marginRight={0} />
        </NameContainer>
        <Input placeholder="Email" width={350} marginRight={0} />
        <Input placeholder="Username" width={350} marginRight={0} />
        <Input
          placeholder="Password"
          width={350}
          marginRight={0}
          secureTextEntry={true}
        />
      </InputContainer>
      <ButtonContainer>
        <GradientContainer onPress={() => setIsLoading()}>
          <LinearGradient
            style={stylesGradient}
            colors={['#04b4ff', '#0500ff', '#b400ff', '#ff00d6']}>
            <LoginButton>Log in</LoginButton>
          </LinearGradient>
        </GradientContainer>
        <LoginText onPress={() => navigation.navigate('Login')}>
          Cancel
        </LoginText>
      </ButtonContainer>
    </CreateContrainer>
  );
};

export default CreateAccount;
