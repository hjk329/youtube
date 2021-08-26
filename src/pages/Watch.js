import React from 'react';
import styled from 'styled-components';

import ShowVideoContainer from '../views/watch/containers/ShowVideoContainer';
import AnimationSidebarContainer from '../views/shared/containers/AnimationSidebarContainer';

const Watch = () => (
  <Container>
    <AnimationSidebarContainer />
    <ShowVideoContainer />
  </Container>
)

const Container = styled.div`

`;
export default Watch;
