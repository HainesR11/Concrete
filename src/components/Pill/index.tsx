import React from 'react';
import styled from 'styled-components/native';

type TPillProps = {
  type: 'New' | 'InProgress' | 'Complete';
};

const PillContainer = styled.View<TPillProps>`
  width: 100px;
  border-radius: 10px;
  padding: 2px 0px
  background-color: ${(props) =>
    props.type === 'New'
      ? 'red'
      : props.type === 'InProgress'
      ? 'blue'
      : 'green  '};
`;

const PillText = styled.Text`
  color: white;
  text-align: center;
`;

const PillIcon = ({ type }: TPillProps) => {
  const pillText = () => {
    if (type === 'New') {
      return type;
    }
    if (type === 'InProgress') {
      return 'In Progress';
    }
    if (type === 'Complete') {
      return type;
    }
  };

  return (
    <PillContainer type={type}>
      <PillText>{pillText()}</PillText>
    </PillContainer>
  );
};

export default PillIcon;
