import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeaderContainer from './views/shared/containers/HeaderContainer';
import { GlobalStyle } from './styled/GlobalStyle';
import Watch from './pages/Watch';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/watch" component={Watch} />

    </Switch>
  </Container>
)

const Container = styled.div`

`;
export default App;
