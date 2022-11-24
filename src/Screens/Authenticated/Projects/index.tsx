import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useUserStore } from '../../../../store';
import { TColorOption } from '../../../components/ColorScheme';
import { MockProjects } from '../../../__mocks__/ProjectMocks';
// import PopUp from '../../../components/PopUp';

const { width, height } = Dimensions.get('screen');

type TCreateContainerProps = {
  background: TColorOption;
};

type TTextProps = {
  size: number;
};

const ProjectContainer = styled.SafeAreaView`
  align-items: center;
  height: ${height};
`;
const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

const ProfileIcon = styled.Image`
  height: ${width / 9}px;
  width: ${width / 9}px;
  border-radius: 18px;
  margin: 6% 0;
`;

const ScrollViewContainer = styled.ScrollView``;

const CreateProjectContainer = styled.TouchableOpacity<TCreateContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
  background-color: ${(state) => state.background};
  width: ${width - width / 10}px;
  height: ${height / 15}px;
  border-radius: 16px;
  align-items: center;
  padding: 0px 20px;
`;

const ProjectItemContainer = styled.TouchableOpacity<TCreateContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
  background-color: ${(state) => state.background};
  width: ${width - width / 10}px;
  height: ${height / 5}px;
  border-radius: 16px;
  align-items: center;
  padding: 0px 20px;
`;

const TitleText = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 15px;
  flex: 2;
`;

const ProjectViewContainer = styled.View`
  display: flex;
  align-items: center;
  width: ${width}px;
  height: ${height - height / 5};
`;

const Icon = styled(FontAwesomeIcon)`
  flex: 1;
`;

const ProjectContentContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const ProjectImageContainer = styled.View``;

const ProjectText = styled.Text<TTextProps>`
  color: white;
  font-size: ${(state) => state.size};
  flex: 1;
`;

const ProjectImage = styled.Image`
  height: ${width / 4}px;
  width: ${width / 4}px;
`;

const ProfileIconContainer = styled.View<TCreateContainerProps>`
  background-color: ${(state) => state.background}
  height: ${width / 9}px;
  width: ${width / 9}px;
  border-radius: 18px;
  align-items: center;
  margin: 6% 0;
`;

const IconContainer = styled.View``;

// const buttons = [
//   {
//     testId: 'ModalButtonYes',
//     title: 'Yes',
//     onPress: () => {},
//   },
//   {
//     testId: 'ModalButtonNo',
//     title: 'No',
//     onPress: () => {},
//   },
// ];

const Projects = () => {
  const { color } = useUserStore((state) => state);
  const CreateProject = () => {
    return (
      <CreateProjectContainer background={color.Main}>
        <TitleText>Start new project</TitleText>
        <IconContainer>
          <Icon color="white" size={25} icon={faPlus} />
        </IconContainer>
      </CreateProjectContainer>
    );
  };

  const ProjectView = ({ item }) => {
    const { Name, Tasks, DateUpdated, IconImage } = item;
    const ProfileImage = false;
    const image = require('../../../assets/images/Profile.png');
    return (
      <ProjectItemContainer background={color.Main}>
        <ProjectContentContainer>
          {ProfileImage ? (
            <ProfileIcon source={image} />
          ) : (
            <ProfileIconContainer background={color.Profile}>
              <Icon icon={faUser} />
            </ProfileIconContainer>
          )}
          <TitleText>{Name}</TitleText>
          <ProjectText size={9}>Number of tasks - {Tasks.length}</ProjectText>
          <ProjectText size={7}>Last Updated - {DateUpdated}</ProjectText>
        </ProjectContentContainer>
        <ProjectImageContainer>
          <ProjectImage source={IconImage} />
        </ProjectImageContainer>
      </ProjectItemContainer>
    );
  };

  return (
    <ProjectContainer>
      <Title>Projects</Title>
      <ProjectViewContainer>
        <ScrollViewContainer>
          <CreateProject />
          {MockProjects.map((item) => {
            return <ProjectView item={item} />;
          })}
        </ScrollViewContainer>
      </ProjectViewContainer>
    </ProjectContainer>
  );
};

export default Projects;
