import React from 'react';
import styled from 'styled-components';

import Nav from "./Nav";
import {IconLogo} from "../../../../icons";
import SearchBox from "./SearchBox";
import {MdMenu} from "react-icons/all";
import {DefaultButton} from "../Button/StyledButton";


const Gnb = () => {
    return (
        <Container>
            <Logo>
                <Button className={'side'}> <MdMenu/> </Button>
                <Button className={'logo'}> <IconLogo/> </Button>
            </Logo>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;

const Button = styled(DefaultButton)`
  &.side {
    padding: 8px;
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96,96,96);
    }
  }
  
  &.logo {
    padding: 18px 14px 18px 16px;
  }

`;

export default Gnb;