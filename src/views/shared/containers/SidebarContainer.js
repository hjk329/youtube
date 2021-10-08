import React from 'react';
import styled from 'styled-components';

import DrawerSidebar from '../components/Sidebar/components/DrawerSidebar';
import MainSidebarContainer from './MainSidebarContainer';

const SidebarContainer = () => (
  <Container>
    <DrawerSidebar />
    <MainSidebarContainer />
  </Container>
)

const Container = styled.div`

`;
export default SidebarContainer;
