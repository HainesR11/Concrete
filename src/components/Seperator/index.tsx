import React from 'react';
import styled from 'styled-components/native';

const SeperatorMark = styled.View`
  width: 90%;
  border-radius: 5px;
  opacity: 0.7;
  height: 1px;
  background-color: #313639;
`;

const SeperatorContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Seperator = () => {
  return (
    <SeperatorContainer>
      <SeperatorMark />
    </SeperatorContainer>
  );
};

export default Seperator;
