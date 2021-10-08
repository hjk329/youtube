import React, { useEffect } from 'react';
import styled from 'styled-components';

import Gnb from '../components/Header/Gnb';

const HeaderContainer = () => (
  <Container>
    <Gnb />
  </Container>
)

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;
export default HeaderContainer;
