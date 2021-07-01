import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';

const HeaderContainer = styled(SafeAreaView)`
  background-color: ${Colors.primary};
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
const BlueToothIcon = styled(Image)`
  height: 30px;
  width: 30px;
`;
const LogoIcon = styled(Image)`
  height: 50px;
  width: 50px;
`;
const NotificationIcon = styled(Image)`
  height: 30px;
  width: 30px;
`;
type HeaderTypeProps = {
  isIcon: boolean;
}
export const Header: React.FC<HeaderTypeProps> = ({ children, isIcon }) => {
  return (
    <HeaderContainer>
      <BlueToothIcon source={require('../assets/images/bluetooth.png')} />
      {isIcon ? <LogoIcon source={require('../assets/images/logo.png')} /> : children}
      <NotificationIcon source={require('../assets/images/ring.png')} />
    </HeaderContainer>
  )
}
