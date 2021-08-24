import React from 'react';
import styled from 'styled-components';

import Gnb from '../components/Header/Gnb';
import Shortcuts from '../components/Sidebar/Shortcuts';

const HeaderContainer = () => (
  <Container>
    <Gnb />
    <Shortcuts />
  </Container>
)

const Container = styled.div`

`;
export default HeaderContainer;
