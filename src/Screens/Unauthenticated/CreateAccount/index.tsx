import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useRootStore } from '../../../../store.js';
import { TStackNavigationParams } from '../../RootNavigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useRootStore } from '../../../../store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Seperator from '../../../components/Seperator';
import { GradientButton } from '../../../components/Button';
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const { width } = Dimensions.get('screen');

type TNavigationProps = DrawerNavigationProp<TStackNavigationParams>;

type TIconProps = {
  color: string;
};

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

const OptionTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  opacity: 0.6;
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 90%;
`;
const Logo = styled.Image`
  width: 200px;
  height: 100px;
`;
const Input = styled.TextInput`
  margin-left: 15px;
  width: 100%;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const InputBoxContainer = styled.View`
  border-width: 2px;
  border-color: black;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  width: ${width - width / 4}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  flex: 1;
`;

const LogoContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const SeperatorContainer = styled.View`
  width: 30%;
`;

const SocialIconContainer = styled.TouchableOpacity<TIconProps>`
  background-color: ${(state) => state.color};
  padding: 10px;
  border-radius: 7px;
`;

const Text = styled.Text``;

const Icon = styled(FontAwesomeIcon)``;

const SocialsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  margin: 20px 0px;
`;

const CreateAccount = () => {
  const setIsLoading = useRootStore((state) => state.setIsLoading);
  const navigation = useNavigation<TNavigationProps>();

  const InputBox = ({ icon, text }) => {
    return (
      <InputBoxContainer>
        <Icon icon={icon} />
        <Input placeholder={text} />
      </InputBoxContainer>
    );
  };

  const OptionSelector = () => {
    return (
      <OptionTextContainer>
        <SeperatorContainer>
          <Seperator />
        </SeperatorContainer>
        <Text>Or connect using</Text>
        <SeperatorContainer>
          <Seperator />
        </SeperatorContainer>
      </OptionTextContainer>
    );
  };

  const Header = () => {
    return (
      <ImageContainer>
        <IconContainer onPress={() => navigation.navigate('Login')}>
          <Icon icon={faChevronLeft} />
        </IconContainer>
        <LogoContainer>
          <Logo
            source={require('../../../assets/images/Concrete-logos_transparent.png')}
          />
        </LogoContainer>
      </ImageContainer>
    );
  };

  const SocialIcon = ({ icon, color }) => {
    return (
      <SocialIconContainer color={color}>
        <Icon color="white" icon={icon} />
      </SocialIconContainer>
    );
  };

  return (
    <CreateContrainer>
      <Header />
      <HomeText>Create account</HomeText>
      <InputContainer>
        <InputBox icon={faUser} text={'Full name'} />
        <InputBox icon={faEnvelope} text={'Email Address'} />
        <InputBox icon={faLock} text={'Password'} />
      </InputContainer>
      <ButtonContainer>
        <GradientButton fucntion={setIsLoading} text={'CreateAccount'} />
      </ButtonContainer>
      <OptionSelector />
      <SocialsContainer>
        <SocialIcon icon={faFacebookF} color={'#4D59FF '} />
        <SocialIcon icon={faInstagram} color={'pink'} />
        <SocialIcon icon={faGoogle} color={'#FF3A3A '} />
      </SocialsContainer>
    </CreateContrainer>
  );
};

export default CreateAccount;
