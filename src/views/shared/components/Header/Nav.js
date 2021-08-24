import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdAccountCircle, MdApps, MdMoreVert } from 'react-icons/all';

const Nav = () => (
  <Container>
    <NavItem><MdApps /></NavItem>
    <NavItem><MdMoreVert /></NavItem>
    <NavItem>
      <MdAccountCircle />
      {' '}
      로그인
    </NavItem>
  </Container>
)

const Container = styled.div`
  flex-basis: auto;
  display: flex;
`;

const NavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 0 4px;
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }
  
  &:last-child {
    padding: 6px 12px;
    color: rgb(6, 95, 212);
    font-size: 14px;
    font-weight: 500;
    
    border: 1px solid rgb(6, 95, 212);
    border-radius: 2px;

    svg{
      fill: rgb(6, 95, 212);
      margin-right: 8px;
    }
  }
`;
export default Nav;
