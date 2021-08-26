import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/all';

import { Link } from 'react-router-dom';

import { IconLogo } from '../../../../../icons';
import SearchBox from '../SearchBox';
import Nav from './Nav';
import AnimationSidebar from '../../Sidebar/components/contents/AnimationSidebar';

const GnbCallingAnimationSidebar = ({ getAnimationSidebar, animationSidebarStatus }) => (
  <Container>
    <Logo>
      <Button className="side" onClick={getAnimationSidebar}>
        {' '}
        <MdMenu />
        {' '}
      </Button>
      <Button className="logo" to="/">
        {' '}
        <IconLogo />
        {' '}
      </Button>
    </Logo>
    <SearchBox />
    <Nav />
    <AnimationSidebar sidebar={animationSidebarStatus} getAnimationSidebar={getAnimationSidebar} />
  </Container>
)

const Container = styled.div`
  position: relative;
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

const Button = styled(Link)`
  display: block;
  cursor: pointer;

  &.side {
    padding: 8px;

    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }
  }

  &.logo {
    padding: 18px 14px 18px 16px;
  }

`;
export default GnbCallingAnimationSidebar;
