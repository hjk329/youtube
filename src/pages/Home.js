import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../views/home/containers/HomeContainer';
import CategoriesContainer from '../views/home/categories/containers/CategoriesContainer';

const Home = () => (
  <Container>
    <CategoriesContainer />
    <HomeContainer />
  </Container>
)

const Container = styled.div`
`;
export default Home;
