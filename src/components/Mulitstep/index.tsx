import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

type TMultistepContent = {
  name: string;
  component: FC;
};

type TTMultistep = {
  data: TMultistepContent;
};

const MultistepContainer = styled.View``;

const MulitStep = ({ data }: TTMultistep) => {
  console.log(data);
};

export default MulitStep;
