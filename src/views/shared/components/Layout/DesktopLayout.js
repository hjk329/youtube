import React from 'react';
import styled from 'styled-components';

const DesktopLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
)

const Container = styled.div`
  position: absolute;
  left:72px;
`;
export default DesktopLayout;
