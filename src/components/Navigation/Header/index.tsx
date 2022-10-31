import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Logo = styled.Image`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  flex: 3;
`;

const LogoContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 20px;
`;

const FontAwesomeLogo = styled(FontAwesomeIcon)`
  flex: 1;
`;
const TouchOpacicity = styled.TouchableOpacity``;

const CustomHeader = ({ navigation }) => {
  return (
    <LogoContainer>
      <TouchOpacicity onPress={() => navigation.toggleDrawer()}>
        <FontAwesomeLogo icon={faUser} size={20} />
      </TouchOpacicity>
      <Logo
        source={require('../../../assets/images/Concrete-logos_black.png')}
      />
      <TouchOpacicity onPress={() => navigation.navigate('Home')}>
        <FontAwesomeLogo icon={faSearch} size={20} />
      </TouchOpacicity>
    </LogoContainer>
  );
};
export default CustomHeader;
