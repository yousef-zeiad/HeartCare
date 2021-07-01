import React from 'react';
import styled from 'styled-components/native';

export type AccountParamList = {
  AccountScreen: undefined;
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
export const AccountScreen = () => {
  return (
    <Container>
      <Title>AccountScreen</Title>
    </Container>
  );
}
