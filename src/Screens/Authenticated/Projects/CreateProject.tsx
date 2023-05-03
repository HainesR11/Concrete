import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import MultiStep from '../../../components/Mulitstep';

const CreateContainer = styled.View``;

const steps = [
  {
    title: 'Project Name',
    component: (
      <View>
        <Text>part 3</Text>
      </View>
    ),
  },
  {
    title: 'Project Description',
    component: (
      <View>
        <Text>part 3</Text>
      </View>
    ),
  },
  {
    title: 'Test',
    compoonent: (
      <View>
        <Text>part 3</Text>
      </View>
    ),
  },
];

const CreateProject = () => {
  return (
    <CreateContainer>
      <MultiStep data={steps} />
    </CreateContainer>
  );
};

export default CreateProject;
