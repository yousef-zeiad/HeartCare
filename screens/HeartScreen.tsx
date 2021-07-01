import React from 'react';
import styled from 'styled-components/native';

export type HeartParamList = {
  HeartScreen: undefined;
};

const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const HeartScreen = () => {
  return (
    <Container>
      <Title>HeartScreen</Title>
    </Container>
  );
}
