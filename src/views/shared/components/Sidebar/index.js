import React from 'react';
import styled from 'styled-components';

import Contents from './components/contents';

const Sidebar = () => (
  <Container>
    <Contents />
  </Container>
)

const Container = styled.div`
  position: relative;
`;
export default Sidebar;
