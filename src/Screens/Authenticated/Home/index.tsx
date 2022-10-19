import React, { useState } from 'react';
import styled from 'styled-components/native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import { useEffect } from 'react';
import moment from 'moment';
import { Projects } from '../../../__mocks__/ProjectMocks';
import ProjectView from '../../../components/ProjectView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Tasks } from '../../../__mocks__/TaskMocks';
import TaskView from '../../../components/Tasks/index';
import { useRootStore } from '../../../../store';

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
  margin: 20px 0px;
`;
const ProjectContainer = styled.View`
  display: flex;
  height: 285px;
  flex-direction: column;
  alignitems: space-around;
`;

const TaskContainer = styled.View`
  display: flex;
  height: 225px;
  flex-direction: column;
  alignitems: space-around;
`;

const ViewContainer = styled.ScrollView`
  padding: -10px 0px;
`;

const DateContainer = styled.View`
  margin: 20px 0;
`;

const calendarStrip = {
  height: 77,
  width: 332,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 15,
};

const Logo = styled.Image`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  flex: 3;
`;

const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0px 10px;
`;

const FontAwesomeLogo = styled(FontAwesomeIcon)`
  flex: 1;
`;
const TouchOpacicity = styled.TouchableOpacity``;

const Home = () => {
  const [date, setDate] = useState(new Date());
  const setUserToken = useRootStore((state) => state.setIsLoading);
  const limit = 5;

  useEffect(() => {
    setDate(new Date());
  }, []);

  const colorReturn = () => {
    return { color: 'white' };
  };

  return (
    <HomeContainer>
      <LogoContainer>
        <TouchOpacicity onPress={() => setUserToken}>
          <FontAwesomeLogo icon={faUser} size={20} />
        </TouchOpacicity>
        <Logo
          source={require('../../../assets/images/Concrete-logos_black.png')}
        />
        <FontAwesomeLogo icon={faSearch} size={20} />
      </LogoContainer>
      <DateContainer>
        <ReactNativeCalendarStrip
          style={calendarStrip}
          calendarColor={'#0066FF'}
          calendarHeaderStyle={colorReturn()}
          dateNumberStyle={colorReturn()}
          dateNameStyle={colorReturn()}
          selectedDate={date}
          startingDate={moment().subtract(3, 'days').toDate()}
        />
      </DateContainer>
      <ProjectContainer>
        <Title>My Projects</Title>
        <ViewContainer horizontal={true}>
          {Projects.map((project) => {
            return <ProjectView project={project} />;
          })}
        </ViewContainer>
      </ProjectContainer>
      <TaskContainer>
        <Title>My Tasks</Title>
        <ViewContainer>
          {Tasks.slice(0, limit ? limit : Tasks.length).map((Task) => {
            return <TaskView task={Task} />;
          })}
        </ViewContainer>
      </TaskContainer>
    </HomeContainer>
  );
};
export default Home;
