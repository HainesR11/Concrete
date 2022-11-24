import React, { useState } from 'react';
import { Dimensions, Modal } from 'react-native';
import styled from 'styled-components/native';

type TButtonProps = {
  title: string;
  testId: string;
  onPress: () => {};
  schema?: any;
};

type TPopupProps = {
  title: string;
  onPress: () => {};
  children?: any;
  testId: string;
  buttons: TButtonProps[];
};

const Text = styled.Text``;

const ViewPromptBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  transision: 2s ease;
`;

const ViewPrompt = styled.View<{
  windowWidth: number;
  windowHeight: number;
}>`
  width: ${(props) => props.windowWidth}px;
  min-height: ${(props) => props.windowHeight}px;
  background-color: white};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 100px; //push modal up beyond keyboard
`;

const ButtonContainer = styled.View``;

const ButtonArea = styled.View``;

const DefaultButton = styled.Button``;

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

const PopUp = ({ buttons, testId, title, children }: TPopupProps) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const drawWindowWidth = windowWidth * 0.8;
  const [visible, setVisible] = useState(true);
  const drawWindowHeight = windowHeight * 0.18;
  if (visible) {
    return (
      <Modal testID={testId}>
        <ViewPromptBackground>
          <ViewPrompt
            windowWidth={drawWindowWidth}
            windowHeight={drawWindowHeight}>
            <ButtonArea>
              <ButtonContainer>
                {!buttons ||
                  (buttons?.length === 0 && (
                    <DefaultButton
                      title={'close'}
                      onPress={() => setVisible(!visible)}
                    />
                  ))}
              </ButtonContainer>
            </ButtonArea>
          </ViewPrompt>
        </ViewPromptBackground>
      </Modal>
    );
  }
};

export default PopUp;
