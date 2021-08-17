import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import Sidebar from "../components/Sidebar";


const SidebarContainer = () => {

    const isVisible = useSelector(state => state.menu)

    return (
        <Container>
            {
                isVisible &&
                    <Sidebar/>
            }
        </Container>
    )
}

const Container = styled.div`

`;
export default SidebarContainer;