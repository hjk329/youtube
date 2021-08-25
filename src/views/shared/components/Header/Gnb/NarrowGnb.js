import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MdMenu } from 'react-icons/all';

import { useDispatch, useSelector } from 'react-redux';

import Nav from './Nav';
import { IconLogo } from '../../../../../icons';
import SearchBox from '../SearchBox';
import { DefaultButton } from '../../Button/DefaultButton';
import Sidebar from '../../Sidebar';
import { Desktop, Tablet, WideDesktop } from '../../../../../hooks/mediaQuery';
import AnimationSidebar from '../../Sidebar/components/contents/AnimationSidebar';
import Shortcuts from '../../Sidebar/components/Shortcuts';
import { showAnimationSidebar, showSidebar } from '../../../redux/slice';

const NarrowGnb = () => {
  const dispatch = useDispatch()
  const getAnimationSidebar = () => {
    dispatch(showAnimationSidebar())
  }
  const animationSidebarStatus = useSelector((state) => state.app.animationSidebar)
  return (
    <Container>
      <Logo>
        <Button className="side" onClick={getAnimationSidebar}>
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
      <SearchBox />
      <Nav />
      <AnimationSidebar sidebar={animationSidebarStatus} getAnimationSidebar={getAnimationSidebar} />
    </Container>
  )
}

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

const Button = styled(DefaultButton)`
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

export default NarrowGnb;
