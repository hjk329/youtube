import React from 'react';
import styled from 'styled-components';

import Gnb from "../components/Header/Gnb";


const HeaderContainer = () => {
    return (
        <Container>
            <Gnb/>
        </Container>
    )
}

const Container = styled.div`

`;
export default HeaderContainer;