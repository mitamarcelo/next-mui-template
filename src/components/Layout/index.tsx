import React from 'react';
import Container from '@mui/material/Container';

import { Layout as LayoutStyled, LogoWrapper, ContentContainer } from './Layout.styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <LayoutStyled>
    <LogoWrapper>
      <img src="/images/monsterside_logo.png" alt="LOGO" loading="lazy" />
    </LogoWrapper>
    <ContentContainer>{children}</ContentContainer>
  </LayoutStyled>
);

export default Layout;
