import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HeaderContainer from './views/shared/containers/HeaderContainer';
import { GlobalStyle } from './styled/GlobalStyle';
import Watch from './pages/Watch';
import Search from './pages/Search';
import ChannelSection from './pages/ChannelSection';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/watch/:id" component={Watch} />
      <Route exact path="/results/:query" component={Search} />
      <Route exact path="/channel/:channelId" component={ChannelSection} />

    </Switch>
  </Container>
)

const Container = styled.div`

`;
export default App;
