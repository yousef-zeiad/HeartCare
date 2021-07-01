import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constants/Colors';

export const Container = styled.View`
  background-color: ${Colors.primary};
  flex:1;
  align-items: center;
`;
export const ScrollList = styled(ScrollView)`
padding-bottom: 20px;
padding: 20px;
`;
export const HeartRateContainer = styled.View<{ height: boolean }>`
  flex-direction: row;
  align-items: center;
  height:${props => props.height ? 160 : 30}px
`;
export const RateCounterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const RatingNumber = styled.Text<{ fontSize?: number | boolean }>`
  font-size: ${porps => porps.fontSize ? 70 : 30}px;
  margin-left: 20px;
`;
export const BpmTitle = styled.Text<{ fontSize?: number | boolean, marginBottom?: number | boolean }>`
  font-size: ${porps => porps.fontSize ? 20 : 10}px;
  margin-left: 8px;
  margin-bottom: ${porps => porps.marginBottom ? 40 : 0}px;
  font-weight: 500;
  letter-spacing: 1px;
`;
export const AnimatiedChart = styled.View`
justify-content: center;
background-color: ${Colors.gray};
padding-top: 10px;
`;
export const BackgroundIcon = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 10px;
  border-radius: 10px;
  background-color: #f2f2f2;
  position: absolute;
  z-index: 100;
  top:0px;
  right: 2px;
`;
const LeadContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const LeadTabTitle = styled.Text<{ isActive?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color:${props => props.isActive ? Colors.black : Colors.dark_gray};
`;
const ActiveLabel = styled.View<{ isActive: boolean }>`
height: 5px;
width: 5px;
border-radius: 8px;
background-color: ${props => props.isActive ? Colors.secondary : 'transparent'};
margin-top: 5px;
`
interface INumber {
  number: number | string;
  isActive: boolean;
}
export const LeadTabs: React.FC<INumber> = ({ number, isActive }) => (
  <LeadContainer>
    <LeadTabTitle isActive={isActive}>LEAD {number}</LeadTabTitle>
    <ActiveLabel isActive={isActive} />
  </LeadContainer>
);
export const RawView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
`;
