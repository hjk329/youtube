import React from 'react';
import styled from 'styled-components';

import Contents from './components/contents';

const Sidebar = () => (
  <Container className="Sidebar">
    <Contents />
  </Container>
)

const Container = styled.div`
  position: fixed;
  top: 54px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: auto;
  background: #fff; 
`;
export default Sidebar;
