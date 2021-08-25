import React from 'react';
import styled from 'styled-components';

const WideDesktopLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
)

const Container = styled.div`
  position: absolute;
  left: 240px;
`;
export default WideDesktopLayout;
