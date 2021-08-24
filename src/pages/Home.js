import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../views/home/containers/HomeContainer';

const Home = () => (
  <Container>
    <HomeContainer />
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default Home;
