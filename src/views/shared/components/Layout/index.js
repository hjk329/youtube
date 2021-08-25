import React from 'react';
import styled from 'styled-components';

import { Desktop, WideDesktop } from '../../../../hooks/mediaQuery';
import WideDesktopLayout from './WideDesktopLayout';
import DesktopLayout from './DesktopLayout';

const ContentContainer = ({ children }) => (
  <Container>
    <WideDesktop>
      <WideDesktopLayout>
        {children}
      </WideDesktopLayout>
    </WideDesktop>
    <Desktop>
      <DesktopLayout>
        {children}
      </DesktopLayout>
    </Desktop>
  </Container>
)

const Container = styled.div`

`;
export default ContentContainer;
