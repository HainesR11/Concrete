import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = styled.View`
  border-radius: 36px;
  background-color: #3461ff;
  width: 175px;
  height: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
`;

const ProjectText = styled.Text`
  color: white;
  flex: 1;
  font-size: 8px;
`;

const ProjectTitle = styled.Text`
  color: white;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  flex: 2;
  padding-top: 5px;
`;
const Icon = styled(FontAwesomeIcon)``;

const IconContainer = styled.View`
  width: 41px;
  height: 31px;
  background-color: #1f50ff;
  flex: 1;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ProjectView = ({ project }) => {
  const { Name, DateUpdated } = project;
  console.log(Name);
  return (
    <ProjectContainer>
      <IconContainer>
        <Icon icon={faUser} size={20} />
      </IconContainer>
      <ProjectTitle>{Name}</ProjectTitle>
      <ProjectText>last updated - {DateUpdated}</ProjectText>
    </ProjectContainer>
  );
};

export default ProjectView;
