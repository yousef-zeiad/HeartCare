import React from 'react';
import styled from 'styled-components/native';

export type MedicalParamList = {
  MedicalScreen: undefined;
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
export const MedicalScreen = () => {
  return (
    <Container>
      <Title>MedicalScreen</Title>
    </Container>
  );
}
