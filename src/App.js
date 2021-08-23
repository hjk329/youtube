import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeaderContainer from './views/shared/containers/HeaderContainer';
import { GlobalStyle } from './styled/GlobalStyle';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Container>
)

const Container = styled.div`

`;
export default App;
