import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { useWindowSize } from 'rooks';

import Shortcuts from '../components/Sidebar/components/Shortcuts';
import Sidebar from '../components/Sidebar';
import AnimationSidebar from '../components/Sidebar/components/contents/AnimationSidebar';
import { showAnimationSidebar, showShortcuts } from '../redux/slice';
import Gnb from '../components/Header/Gnb';

const HeaderContainer = () => {
  const shortcutsState = useSelector((state) => state.app.shortcuts)
  const animationSidebarStatus = useSelector((state) => state.app.animationSidebar)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const { innerWidth } = useWindowSize();

  const normal = (innerWidth >= 1313 && !shortcutsState);
  const shortcut = innerWidth >= 768 && shortcutsState;
  const deem = innerWidth < 768 || (innerWidth < 1313 && !shortcutsState);

  const dispatch = useDispatch()
  const getSidebar = () => {
    dispatch(showShortcuts())
  }
  const match = useRouteMatch()
  // const isWatch = match.path === '/watch/:id'
  // if (isWatch) {
  //   dispatch(showShortcuts(true))
  // }

  const isSearch = match.path === '/results/:query'

  return (

    <Container>
      <Gnb getSidebar={getSidebar} />

      {
        // eslint-disable-next-line no-nested-ternary
        (normal && isHome) || isSearch ? <Sidebar />
          // eslint-disable-next-line no-nested-ternary
          : (shortcut && isHome)
            ? <Shortcuts />
            : <AnimationSidebar sidebar={!shortcutsState} getSidebar={getSidebar} />
      }

      {/* { */}
      {/*  // eslint-disable-next-line no-nested-ternary */}
      {/*  isWatch ? <AnimationSidebar sidebar={animationSidebarStatus} getAnimationSidebar={getAnimationSidebar} /> */}
      {/*    // eslint-disable-next-line no-nested-ternary */}
      {/*    : (normal && isHome) || (isHome && innerWidth > 1313) ? <Sidebar /> */}
      {/*      : (shortcut && isHome) || (isHome && innerWidth > 1313 && shortcutsState) ? <Shortcuts /> */}
      {/*        : <AnimationSidebar sidebar={!shortcutsState} getAnimationSidebar={getAnimationSidebar} /> */}
      {/* } */}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;
export default HeaderContainer;
