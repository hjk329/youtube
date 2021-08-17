import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import HeaderContainer from "./views/shared/containers/HeaderContainer";
import {GlobalStyle} from "./styled/GlobalStyle";
import SidebarContainer from "./views/shared/containers/SidebarContainer";


const App = () => {
    return (
        <Container>
            <GlobalStyle/>
            <SidebarContainer/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;
export default App;