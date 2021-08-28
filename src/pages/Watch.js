import React from 'react';
import styled from 'styled-components';

import WatchVideoContainer from '../views/watch/containers/WatchVideoContainer';
import AnimationSidebarContainer from '../views/shared/containers/AnimationSidebarContainer';

const Watch = () => (
  <Container>
    <AnimationSidebarContainer />
    <WatchVideoContainer />
  </Container>
)

const Container = styled.div`

`;
export default Watch;
