import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import { useEffect } from 'react';
import moment from 'moment';

const windowWidth = Dimensions.get('window').width;

const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;
const ProjectContainer = styled.View``;
const DateContainer = styled.View`
  margin: 20px 0;
`;

const Home = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <HomeContainer>
      <DateContainer>
        <ReactNativeCalendarStrip
          scrollable
          style={{
            height: 77,
            width: 332,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 15,
          }}
          calendarColor={'#0066FF'}
          calendarHeaderStyle={{ color: 'white' }}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          selectedDate={date}
          startingDate={moment().subtract(3, 'days').toDate()}
        />
      </DateContainer>
      <ProjectContainer>
        <Title>My Projects</Title>
      </ProjectContainer>
    </HomeContainer>
  );
};
export default Home;
