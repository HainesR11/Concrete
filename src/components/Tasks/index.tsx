import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import PillIcon from '../Pill';

type TTitleProps = {
  isNew: boolean;
  isComplete: boolean;
};

const width = Dimensions.get('screen').width;

const TaskContainerWidth = width - 40;

const TaskContainer = styled.View<TTitleProps>`
  width: ${TaskContainerWidth}px;
  border: 1px solid black;
  margin: 5px 0px;
  padding: 10px 0px;
  border-radius: 5px;
  border-left-color: ${(props) =>
    props.isComplete ? 'green' : props.isNew ? 'red' : 'blue'};
  border-left-width: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TaskTitle = styled.Text`
  margin-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  flex: 3;
`;

const PillContainer = styled.View`
  flex: 3;
`;

const FontIcon = styled(FontAwesomeIcon)`
  flex: 1;
`;

const TaskView = ({ task }) => {
  const { TaskName, DateCreated, DateCompleted } = task;
  const [isNew, setIsNew] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const pillText = () => {
    if (isNew) {
      return 'New';
    }
    if (isCompleted) {
      return 'Complete';
    } else {
      return 'InProgress';
    }
  };

  useEffect(() => {
    const date = moment(DateCreated).format('DD MMMM yyyy');
    setIsNew(moment(date).isSameOrAfter(moment(Date()).format('DD MMMM yyyy')));
    setIsCompleted(DateCompleted ? true : false);
    console.log(isCompleted);
  }, [DateCreated, DateCompleted, isCompleted]);

  return (
    <TaskContainer isComplete={isCompleted} isNew={isNew}>
      <FontIcon icon={Icons.faHouse} />
      <TaskTitle>{TaskName}</TaskTitle>
      <PillContainer>
        <PillIcon type={pillText()} />
      </PillContainer>
    </TaskContainer>
  );
};

export default TaskView;
