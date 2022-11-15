import React, { useState } from 'react';
import styled from 'styled-components/native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { MockProjects } from '../../../__mocks__/ProjectMocks';
import ProjectView from '../../../components/ProjectView';
import { Tasks } from '../../../__mocks__/TaskMocks';
import TaskView from '../../../components/Tasks/index';
import CustomTabButton from '../../../components/Navigation/CustomTabButton';
const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 15px 0px;
`;
const ProjectContainer = styled.View`
  display: flex;
  height: 285px;
  flex-direction: column;
  alignitems: space-around;
`;

const TaskContainer = styled.View`
  display: flex;
  height: 285px;
  flex-direction: column;
  alignitems: space-around;
  padding-top: 10px;
`;

const ViewContainer = styled.ScrollView`
  padding: -10px 0px;
`;

const DateContainer = styled.View``;

const calendarStrip = {
  height: 77,
  width: 332,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 15,
};

const Home = () => {
  const limit = 5;

  const [date] = useState(new Date());

  const colorReturn = () => {
    return { color: 'white' };
  };

  return (
    <HomeContainer>
      <DateContainer>
        <ReactNativeCalendarStrip
          style={calendarStrip}
          calendarColor={'#0066FF'}
          calendarHeaderStyle={colorReturn()}
          dateNumberStyle={colorReturn()}
          dateNameStyle={colorReturn()}
          selectedDate={moment(date).toDate()}
          startingDate={moment(date).toDate()}
        />
      </DateContainer>
      <ProjectContainer>
        <Title>My Projects</Title>
        <ViewContainer horizontal={true}>
          {MockProjects.map((project, key) => {
            return <ProjectView key={key} project={project} />;
          })}
        </ViewContainer>
      </ProjectContainer>
      <TaskContainer>
        <Title>My Tasks</Title>
        <ViewContainer>
          {Tasks.slice(0, limit ? limit : Tasks.length).map((Task, key) => {
            return <TaskView key={key} task={Task} />;
          })}
        </ViewContainer>
      </TaskContainer>
      <CustomTabButton />
    </HomeContainer>
  );
};
export default Home;
