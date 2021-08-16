import React from 'react';
import styled from 'styled-components';

import Nav from "./Nav";
import ActionButton from "../ActionButton";
import IconButton from "../Button/IconButton";
import {IconSidebar} from "../../../../icons";
import SearchBox from "./SearchBox";


const Gnb = () => {
    return (
        <Container>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Gnb;