import React from 'react';
import styled from 'styled-components';

import Contents from './components/contents';

const Sidebar = () => (
  <Container>
    <Contents />
  </Container>
)

const Container = styled.div`
  position: absolute;
  top:57px;
  left : 0;
  width: 240px;
  background: rgba(0,0,0,0.1);
`;
export default Sidebar;
