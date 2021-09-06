import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { MdMenu } from 'react-icons/all';

import { Link } from 'react-router-dom';

import { IconLogo } from '../../../../../../icons';
import Contents from './index';

const AnimationSidebar = ({ sidebar, getSidebar }) => (

  <Container className={cn('AnimationSidebar', { open: sidebar })}>
    <Logo>
      <Button onClick={getSidebar}>
        {' '}
        <MdMenu />
        {' '}
      </Button>
      <Button className="logo">
        {' '}
        <IconLogo />
        {' '}
      </Button>
    </Logo>
    <Contents />
  </Container>
)

const Container = styled.div`
  position: fixed;
  width: 240px;
  border-right: 1px solid #000;
  top:0;
  left:0;
  bottom: 0;
  background: #eee;
  z-index: 1000;
  transform: translateX(-100%);
  transition: 0.4s;
  &.open {
    transform: none;
  }
`;

const Logo = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0 16px;

`;

const Button = styled.div`
  padding: 8px;
  cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }

`;

const MenuBox = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid rgb(0, 0, 0, .1);

  p {
    padding: 12px 24px;
  }

`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  margin: 0 24px 10px;
  color: rgb(6, 95, 212);
  font-size: 14px;
  font-weight: 500;

  border: 1px solid rgb(6, 95, 212);
  border-radius: 2px;

  svg{
    fill: rgb(6, 95, 212);
    margin-right: 8px;
  }
  
`;

const Info = styled.div`
  padding: 16px 24px 0;
  font-size: 12px;
  font-weight: 400;
  color: #909090;
  a {
    font-size: 13px;
    font-weight: 500;
    color: #606060;
  }

`;
export default AnimationSidebar;
